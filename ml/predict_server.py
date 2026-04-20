from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import os

app = Flask(__name__)
CORS(app)

STREAM_MODEL_PATH = 'ml/stream_model.pkl'
CAREER_MODEL_PATH = 'ml/career_model.pkl'

stream_model = None
career_model = None


def load_models():
    global stream_model, career_model
    if os.path.exists(STREAM_MODEL_PATH) and os.path.exists(CAREER_MODEL_PATH):
        stream_model = joblib.load(STREAM_MODEL_PATH)
        career_model = joblib.load(CAREER_MODEL_PATH)
        print('Models loaded successfully.')
    else:
        print('Models not found. Please run train_model.py first.')


def normalize_stream_label(label):
    if not label:
        return label
    label = str(label).strip().upper()
    if label == 'SCIENCE':
        return 'Science'
    if label == 'COMMERCE':
        return 'Commerce'
    if label == 'ARTS':
        return 'Arts'
    return label.title()


@app.route('/predict', methods=['POST'])
def predict():
    if stream_model is None or career_model is None:
        load_models()
        if stream_model is None or career_model is None:
            return jsonify({'error': 'Models not trained yet'}), 500

    data = request.json
    answers = data.get('answers')
    if not isinstance(answers, list) or len(answers) != 12:
        return jsonify({'error': 'Invalid answers format. Need 12 answers.'}), 400

    try:
        answers = [int(a) for a in answers]
    except ValueError:
        return jsonify({'error': 'All answers must be integers.'}), 400

    features = np.array(answers).reshape(1, -1)
    stream_prediction = stream_model.predict(features)[0]
    career_prediction = career_model.predict(features)[0]

    stream_probs = stream_model.predict_proba(features)[0]
    classes = stream_model.classes_
    prob_dict = {normalize_stream_label(classes[i]): round(stream_probs[i] * 100, 2) for i in range(len(classes))}

    response = {
        'recommendedStream': normalize_stream_label(stream_prediction),
        'recommendedCareer': career_prediction,
        'scores': prob_dict,
        'matchPercentage': int(max(stream_probs) * 100)
    }
    return jsonify(response)


@app.route('/questions', methods=['GET'])
def get_questions():
    import json
    try:
        with open('ml/questions_pool.json', 'r', encoding='utf-8') as f:
            pool = json.load(f)
        return jsonify({
            'status': 'active',
            'version': 'ml-v1',
            'questions': pool
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    load_models()
    app.run(port=5000, debug=True)
