let currentQuestionIndex = 0;
let scores = { science: 0, commerce: 0, arts: 0 };
let userAnswers = [];

const questionContainer = document.getElementById('question-container');
const optionsGrid = document.getElementById('options-grid');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const mottoText = document.getElementById('motto-text');
const btnNext = document.getElementById('btn-next');
const btnBack = document.getElementById('btn-back');

function initQuiz() {
    renderQuestion();
    updateProgress();

    btnNext.addEventListener('click', () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            currentQuestionIndex++;
            renderQuestion();
            updateProgress();
        } else {
            finishQuiz();
        }
    });

    btnBack.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderQuestion();
            updateProgress();
        }
    });
}

function renderQuestion() {
    const q = quizQuestions[currentQuestionIndex];
    document.getElementById('question-text').textContent = q.question;

    optionsGrid.innerHTML = '';

    q.options.forEach((option, index) => {
        const card = document.createElement('div');
        card.className = 'option-card';
        if (userAnswers[currentQuestionIndex] === index) {
            card.classList.add('selected');
        }

        card.innerHTML = `
            <i class="fas ${option.icon}"></i>
            <span class="option-text">${option.text}</span>
        `;

        card.onclick = () => selectOption(index);
        optionsGrid.appendChild(card);
    });

    // Update buttons
    btnBack.style.display = currentQuestionIndex === 0 ? 'none' : 'flex';
    if (userAnswers[currentQuestionIndex] !== undefined) {
        btnNext.classList.add('active');
        btnNext.innerHTML = currentQuestionIndex === quizQuestions.length - 1 ? 'Finish Registration <i class="fas fa-check"></i>' : 'Next <i class="fas fa-arrow-right"></i>';
    } else {
        btnNext.classList.remove('active');
        btnNext.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
    }

    // Change motivational message
    mottoText.textContent = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
}

function selectOption(index) {
    userAnswers[currentQuestionIndex] = index;

    const cards = document.querySelectorAll('.option-card');
    cards.forEach(c => c.classList.remove('selected'));
    cards[index].classList.add('selected');

    btnNext.classList.add('active');
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
}

function calculateScores() {
    scores = { science: 0, commerce: 0, arts: 0 };
    userAnswers.forEach((ansIndex, qIndex) => {
        const optionScore = quizQuestions[qIndex].options[ansIndex].score;
        scores.science += optionScore.science;
        scores.commerce += optionScore.commerce;
        scores.arts += optionScore.arts;
    });

    // Convert to percentages
    const total = scores.science + scores.commerce + scores.arts;
    return {
        science: Math.round((scores.science / total) * 100) || 0,
        commerce: Math.round((scores.commerce / total) * 100) || 0,
        arts: Math.round((scores.arts / total) * 100) || 0
    };
}

function finishQuiz() {
    const finalScores = calculateScores();
    localStorage.setItem('cp_quiz_result', JSON.stringify(finalScores));

    // Show loading state
    document.querySelector('.quiz-main').innerHTML = `
        <div class="text-center" style="text-align: center;">
            <i class="fas fa-circle-notch fa-spin fa-4x" style="color: var(--color-primary); margin-bottom: 20px;"></i>
            <h2>Analyzing your answers...</h2>
            <p>We're finding your best fit stream.</p>
        </div>
    `;

    setTimeout(() => {
        window.location.href = 'result.html';
    }, 2000);
}

document.addEventListener('DOMContentLoaded', initQuiz);
