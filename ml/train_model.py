import os
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib

DATA_DIR = 'ml'
os.makedirs(DATA_DIR, exist_ok=True)

STREAMS = ['SCIENCE', 'COMMERCE', 'ARTS']
CAREERS = {
    'SCIENCE': ['Software Engineer', 'Data Scientist', 'Physician', 'Civil Engineer', 'Researcher'],
    'COMMERCE': ['Chartered Accountant', 'Investment Banker', 'Marketing Manager', 'Business Analyst', 'Entrepreneur'],
    'ARTS': ['Graphic Designer', 'Journalist', 'Lawyer', 'Psychologist', 'Teacher']
}

QUESTION_PROBABILITIES = [
    {
        'SCIENCE': {0: 0.58, 2: 0.15, 3: 0.1, 5: 0.17},
        'COMMERCE': {0: 0.05, 2: 0.1, 3: 0.6, 5: 0.25},
        'ARTS': {0: 0.03, 2: 0.15, 3: 0.05, 5: 0.77}
    },
    {
        'SCIENCE': {0: 0.35, 1: 0.45, 3: 0.05, 5: 0.15},
        'COMMERCE': {0: 0.05, 1: 0.05, 3: 0.7, 5: 0.2},
        'ARTS': {0: 0.03, 1: 0.1, 3: 0.1, 5: 0.77}
    },
    {
        'SCIENCE': {0: 0.55, 5: 0.1, 3: 0.15, 2: 0.2},
        'COMMERCE': {0: 0.05, 5: 0.15, 3: 0.7, 2: 0.1},
        'ARTS': {0: 0.05, 5: 0.7, 3: 0.1, 2: 0.15}
    },
    {
        'SCIENCE': {0: 0.5, 3: 0.1, 5: 0.15, 1: 0.25},
        'COMMERCE': {0: 0.05, 3: 0.7, 5: 0.2, 1: 0.05},
        'ARTS': {0: 0.02, 3: 0.1, 5: 0.8, 1: 0.08}
    },
    {
        'SCIENCE': {0: 0.55, 3: 0.1, 5: 0.15, 1: 0.2},
        'COMMERCE': {0: 0.05, 3: 0.7, 5: 0.15, 1: 0.1},
        'ARTS': {0: 0.03, 3: 0.1, 5: 0.75, 1: 0.12}
    },
    {
        'SCIENCE': {0: 0.6, 3: 0.1, 5: 0.1, 1: 0.2},
        'COMMERCE': {0: 0.05, 3: 0.7, 5: 0.15, 1: 0.1},
        'ARTS': {0: 0.05, 3: 0.1, 5: 0.75, 1: 0.1}
    },
    {
        'SCIENCE': {0: 0.6, 1: 0.25, 5: 0.05, 3: 0.1},
        'COMMERCE': {0: 0.05, 1: 0.05, 5: 0.15, 3: 0.75},
        'ARTS': {0: 0.05, 1: 0.15, 5: 0.7, 3: 0.1}
    },
    {
        'SCIENCE': {0: 0.55, 3: 0.1, 5: 0.15, 1: 0.2},
        'COMMERCE': {0: 0.05, 3: 0.7, 5: 0.15, 1: 0.1},
        'ARTS': {0: 0.03, 3: 0.1, 5: 0.75, 1: 0.12}
    },
    {
        'SCIENCE': {0: 0.5, 5: 0.15, 3: 0.1, 1: 0.25},
        'COMMERCE': {0: 0.05, 5: 0.2, 3: 0.65, 1: 0.1},
        'ARTS': {0: 0.03, 5: 0.7, 3: 0.1, 1: 0.17}
    },
    {
        'SCIENCE': {0: 0.5, 3: 0.15, 5: 0.15, 1: 0.2},
        'COMMERCE': {0: 0.05, 3: 0.65, 5: 0.2, 1: 0.1},
        'ARTS': {0: 0.03, 3: 0.1, 5: 0.75, 1: 0.12}
    },
    {
        'SCIENCE': {0: 0.55, 3: 0.15, 5: 0.15, 1: 0.15},
        'COMMERCE': {0: 0.05, 3: 0.7, 5: 0.15, 1: 0.1},
        'ARTS': {0: 0.03, 3: 0.1, 5: 0.75, 1: 0.12}
    },
    {
        'SCIENCE': {0: 0.5, 5: 0.15, 3: 0.1, 1: 0.25},
        'COMMERCE': {0: 0.05, 5: 0.2, 3: 0.65, 1: 0.1},
        'ARTS': {0: 0.03, 5: 0.7, 3: 0.1, 1: 0.17}
    }
]

SAMPLE_WEIGHTS = [0.4, 0.35, 0.25]


def generate_synthetic_data(n_samples=3000):
    data = []
    for _ in range(n_samples):
        profile = np.random.choice(STREAMS, p=SAMPLE_WEIGHTS)
        answers = []
        for question_index in range(len(QUESTION_PROBABILITIES)):
            value_probs = QUESTION_PROBABILITIES[question_index][profile]
            values = list(value_probs.keys())
            probabilities = list(value_probs.values())
            answers.append(int(np.random.choice(values, p=probabilities)))

        career = np.random.choice(CAREERS[profile], p=[0.3, 0.25, 0.2, 0.15, 0.1])
        data.append(answers + [profile, career])

    columns = [f'q{i}' for i in range(len(QUESTION_PROBABILITIES))] + ['stream', 'career']
    return pd.DataFrame(data, columns=columns)


def main():
    print('Generating synthetic training data...')
    df = generate_synthetic_data()
    print('Sample distribution:')
    print(df['stream'].value_counts(normalize=True).round(2).to_dict())

    X = df.drop(['stream', 'career'], axis=1)
    y_stream = df['stream']
    y_career = df['career']

    print('Training Random Forest for stream classification...')
    stream_model = RandomForestClassifier(n_estimators=150, random_state=42)
    stream_model.fit(X, y_stream)

    print('Training Random Forest for career prediction...')
    career_model = RandomForestClassifier(n_estimators=150, random_state=42)
    career_model.fit(X, y_career)

    stream_path = os.path.join(DATA_DIR, 'stream_model.pkl')
    career_path = os.path.join(DATA_DIR, 'career_model.pkl')
    joblib.dump(stream_model, stream_path)
    joblib.dump(career_model, career_path)

    print(f'Models saved at {stream_path} and {career_path}')


if __name__ == '__main__':
    main()

