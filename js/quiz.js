let currentQuestionIndex = 0;
let questionHistory = [];
let userAnswers = {};
let userSelections = {};
let quizQuestions = [];
let questionMap = {};

const ML_API = 'http://localhost:5000';
const PROGRESS_STEPS = 10;
const FIRST_QUESTION_ID = 1;

const motivationalMessages = [
    'Keep it real - your honest answers help us match your perfect path!',
    'Every answer gets you closer to discovering your ideal career.',
    'Trust your instincts - there are no wrong answers here.',
    'Your unique combination of interests matters more than you think.',
    'Take your time - this isn\'t a race, it\'s your future!',
    'Each question reveals something important about you.',
    'Be yourself - that\'s what makes the results valuable.',
    'You\'re building a clearer picture of your future with each answer.',
    'Remember: there\'s no single "right" stream - find what fits you.',
    'Your interests today shape your opportunities tomorrow.',
    'Focus on what truly excites you - not what others expect.',
    'This quiz is just the first step in your career journey!'
];

// DOM elements - will be set in initQuiz
let questionContainer;
let optionsGrid;
let progressBar;
let progressText;
let mottoText;
let btnNext;
let btnBack;

function buildQuestionMap(questions) {
    return Object.fromEntries(questions.map(question => [question.id, question]));
}

async function initQuiz() {
    // Get DOM elements after DOMContentLoaded
    questionContainer = document.getElementById('question-container');
    optionsGrid = document.getElementById('options-grid');
    progressBar = document.getElementById('progress-bar');
    progressText = document.getElementById('progress-text');
    mottoText = document.getElementById('motto-text');
    btnNext = document.getElementById('btn-next');
    btnBack = document.getElementById('btn-back');

    console.log('Initializing quiz...', {
        readyState: document.readyState,
        questionContainer: !!questionContainer,
        optionsGrid: !!optionsGrid,
        btnNext: !!btnNext,
        btnBack: !!btnBack,
        quizQuestionsLength: quizQuestions.length
    });

    if (!questionContainer || !optionsGrid || !progressBar || !progressText || !mottoText || !btnNext || !btnBack) {
        console.error('Quiz initialization failed: missing DOM elements.');
        return;
    }

    await loadQuizQuestions();
    
    if (!Array.isArray(quizQuestions) || quizQuestions.length === 0) {
        console.error('No quiz questions found.');
        questionContainer.innerHTML = '<p class="question-text" style="text-align: center;">Quiz data is unavailable. Please refresh the page.</p>';
        return;
    }

    questionMap = buildQuestionMap(quizQuestions);
    const firstQuestionId = questionMap[FIRST_QUESTION_ID] ? FIRST_QUESTION_ID : quizQuestions[0].id;
    questionHistory = [firstQuestionId];
    currentQuestionIndex = 0;

    console.log('Quiz questions loaded:', quizQuestions.length, 'questions', 'firstQuestionId:', firstQuestionId);
    
    renderQuestion();
    updateProgress();

    btnNext.addEventListener('click', handleNext);
    btnBack.addEventListener('click', handleBack);
}

async function loadQuizQuestions() {
    try {
        const res = await fetch(`${API_BASE}/quiz/questions`);
        if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data.questions) && data.questions.length > 0) {
                quizQuestions = data.questions;
            }
        }
    } catch (e) {
        console.warn('Quiz API not reachable, using local fallback questions.', e);
    }

    if (!Array.isArray(quizQuestions) || quizQuestions.length === 0) {
        quizQuestions = window.quizQuestions || [];
    }
}

function getNextQuestionId(question, selectedOptionIndex) {
    if (!question) {
        return null;
    }
    const option = question.options?.[selectedOptionIndex];
    if (option?.nextQuestionId) {
        return option.nextQuestionId;
    }
    if (question.nextQuestionId) {
        return question.nextQuestionId;
    }
    const currentIndex = quizQuestions.findIndex(item => item.id === question.id);
    if (currentIndex >= 0 && currentIndex < quizQuestions.length - 1) {
        return quizQuestions[currentIndex + 1].id;
    }
    return null;
}

function handleNext() {
    const currentQuestionId = questionHistory[currentQuestionIndex];
    if (userAnswers[currentQuestionId] === undefined) {
        btnNext.classList.add('warning');
        setTimeout(() => btnNext.classList.remove('warning'), 250);
        return;
    }

    const question = questionMap[currentQuestionId];
    const selectedIndex = userSelections[currentQuestionId];
    const nextQuestionId = getNextQuestionId(question, selectedIndex);

    if (!nextQuestionId) {
        finishQuiz();
        return;
    }

    if (currentQuestionIndex < questionHistory.length - 1) {
        const removed = questionHistory.slice(currentQuestionIndex + 1);
        removed.forEach(id => {
            delete userAnswers[id];
            delete userSelections[id];
        });
        questionHistory = questionHistory.slice(0, currentQuestionIndex + 1);
    }

    questionHistory.push(nextQuestionId);
    currentQuestionIndex++;
    renderQuestion();
    updateProgress();
}

function handleBack() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
        updateProgress();
    }
}

function renderQuestion() {
    if (!quizQuestions || quizQuestions.length === 0) {
        console.error('No quiz questions available');
        if (questionContainer) {
            questionContainer.innerHTML = '<p class="question-text" style="text-align: center;">Quiz data is unavailable. Please refresh the page.</p>';
        }
        return;
    }

    const currentQuestionId = questionHistory[currentQuestionIndex];
    const q = questionMap[currentQuestionId];
    if (!q) {
        console.error('Current question not found at id:', currentQuestionId);
        return;
    }

    console.log('Rendering question:', currentQuestionId, q.question, 'with', q.options?.length, 'options');

    document.getElementById('question-text').textContent = q.question;

    optionsGrid.innerHTML = '';

    if (!q.options || q.options.length === 0) {
        console.error('Question has no options:', q);
        optionsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">No options available for this question.</p>';
        return;
    }

    q.options.forEach((option, index) => {
        const card = document.createElement('div');
        card.className = 'option-card';
        if (userSelections[currentQuestionId] === index) {
            card.classList.add('selected');
        }

        card.innerHTML = `
            <i class="fas ${option.icon || 'fa-question'}"></i>
            <span class="option-text">${option.text}</span>
        `;

        card.onclick = () => selectOption(index, option.value);
        optionsGrid.appendChild(card);
    });

    btnBack.style.display = currentQuestionIndex === 0 ? 'none' : 'flex';
    btnNext.classList.toggle('active', userAnswers[currentQuestionId] !== undefined);

    const isLastQuestion = currentQuestionIndex === PROGRESS_STEPS - 1;
    btnNext.innerHTML = isLastQuestion
        ? 'Finish Analysis <i class="fas fa-magic"></i>'
        : 'Next <i class="fas fa-arrow-right"></i>';

    mottoText.textContent = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
}

function selectOption(index, value) {
    const currentQuestionId = questionHistory[currentQuestionIndex];
    if (currentQuestionIndex < questionHistory.length - 1) {
        const removed = questionHistory.slice(currentQuestionIndex + 1);
        removed.forEach(id => {
            delete userAnswers[id];
            delete userSelections[id];
        });
        questionHistory = questionHistory.slice(0, currentQuestionIndex + 1);
    }

    userSelections[currentQuestionId] = index;
    userAnswers[currentQuestionId] = value;
    const cards = document.querySelectorAll('.option-card');
    cards.forEach(c => c.classList.remove('selected'));
    cards[index].classList.add('selected');
    btnNext.classList.add('active');
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / PROGRESS_STEPS) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${PROGRESS_STEPS}`;
}

function getCareerSuggestions(scores) {
    const careerMap = {
        Science: ['Data Scientist', 'Software Engineer', 'Research Analyst'],
        Commerce: ['Chartered Accountant', 'Business Analyst', 'Investment Banker'],
        'Arts & Humanities': ['UX Designer', 'Content Strategist', 'Journalist']
    };

    const streamOrder = [
        { name: 'Science', value: scores.science || 0 },
        { name: 'Commerce', value: scores.commerce || 0 },
        { name: 'Arts & Humanities', value: scores.arts || 0 }
    ];
    streamOrder.sort((a, b) => b.value - a.value);

    const topStream = streamOrder[0].name;
    const secondStream = streamOrder[1].name;
    const suggestions = [];

    suggestions.push(...careerMap[topStream].slice(0, 2));
    if (streamOrder[1].value > 0) {
        suggestions.push(...careerMap[secondStream].slice(0, 1));
    }

    return suggestions;
}

function computeFallbackResult(answers) {
    let science = 0;
    let commerce = 0;
    let arts = 0;

    const answerValues = Array.isArray(answers) ? answers : Object.values(answers);

    answerValues.forEach(answer => {
        switch (answer) {
            case 0:
            case 1:
                science += 10;
                break;
            case 3:
                commerce += 10;
                break;
            case 2:
                arts += 10;
                break;
            case 5:
                arts += 5;
                commerce += 5;
                break;
            default:
                arts += 5;
        }
    });

    const maxValue = Math.max(science, commerce, arts);
    const scores = {
        science: maxValue ? Math.round((science / maxValue) * 100) : 0,
        commerce: maxValue ? Math.round((commerce / maxValue) * 100) : 0,
        arts: maxValue ? Math.round((arts / maxValue) * 100) : 0
    };

    const streamOrder = [
        { name: 'Science', value: science },
        { name: 'Commerce', value: commerce },
        { name: 'Arts & Humanities', value: arts }
    ];
    streamOrder.sort((a, b) => b.value - a.value);

    const careerSuggestions = getCareerSuggestions(scores);

    return {
        recommendedStream: streamOrder[0].name,
        recommendedCareer: careerSuggestions[0],
        recommendedCareers: careerSuggestions,
        matchPercentage: scores[streamOrder[0].name.toLowerCase()] || 0,
        scores
    };
}

async function finishQuiz() {
    const unanswered = questionHistory.some(id => userAnswers[id] === undefined);
    if (unanswered) {
        alert('Please answer all quiz questions before viewing your analysis.');
        return;
    }

    document.querySelector('.quiz-main').innerHTML = `
        <div class="text-center" style="text-align: center; padding: 40px;">
            <i class="fas fa-brain fa-spin fa-4x" style="color: var(--color-primary); margin-bottom: 20px;"></i>
            <h2 id="loading-title">Analyzing Patterns...</h2>
            <p id="loading-text">Our model is generating your career analysis.</p>
            <div class="ml-status" style="margin-top: 20px; font-size: 14px; opacity: 0.7;">
                <span id="ml-step">Processing answer vectors...</span>
            </div>
        </div>
    `;

    const token = localStorage.getItem('cp_token');
    let result = null;

    try {
        if (token) {
            document.getElementById('ml-step').textContent = 'Submitting your quiz to the secure backend...';
            const answersMap = {};
            questionHistory.forEach(id => {
                answersMap[id] = userAnswers[id].toString();
            });
            
            try {
                result = await api.submitQuiz(answersMap);
                console.log('Backend result:', result);
                // Store both for backward compatibility
                localStorage.setItem('cp_last_result', JSON.stringify(result));
                localStorage.setItem('cp_quiz_result', JSON.stringify({ 
                    science: result.scienceScore || 0, 
                    commerce: result.commerceScore || 0, 
                    arts: result.artsScore || 0 
                }));
            } catch (backendErr) {
                console.warn('Backend submission failed, trying ML service:', backendErr);
                result = null;
            }
        }

        if (!result) {
            document.getElementById('ml-step').textContent = 'Calling the local ML service for prediction...';
            try {
                const res = await fetch(`${ML_API}/predict`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ answers: userAnswers })
                });
                if (res.ok) {
                    result = await res.json();
                    console.log('ML service result:', result);
                    localStorage.setItem('cp_quiz_result_ml', JSON.stringify(result));
                    localStorage.setItem('cp_quiz_result', JSON.stringify(result.scores || result));
                    localStorage.setItem('cp_last_result', JSON.stringify(result));
                } else {
                    throw new Error('ML service error: ' + res.status);
                }
            } catch (mlErr) {
                console.warn('ML service failed, using fallback:', mlErr);
                result = null;
            }
        }
    } catch (err) {
        console.error('Unexpected error during quiz submission:', err);
    }

    if (!result) {
        document.getElementById('ml-step').textContent = 'Computing your analysis locally...';
        result = computeFallbackResult(userAnswers);
        console.log('Fallback result:', result);
    }

    localStorage.setItem('cp_quiz_result_ml', JSON.stringify(result));
    localStorage.setItem('cp_quiz_result', JSON.stringify(result.scores || result));
    localStorage.setItem('cp_last_result', JSON.stringify(result));
    
    console.log('Quiz completed, stored in localStorage:', {
        cp_quiz_result: localStorage.getItem('cp_quiz_result'),
        cp_last_result: localStorage.getItem('cp_last_result')
    });

    setTimeout(() => {
        window.location.href = 'result.html';
    }, 1500);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuiz);
} else {
    initQuiz();
}
