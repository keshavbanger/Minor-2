function initResult() {
    const scores = JSON.parse(localStorage.getItem('cp_quiz_result'));
    if (!scores) {
        window.location.href = 'quiz.html';
        return;
    }

    // Find the highest stream
    const streams = [
        { name: 'Science', score: scores.science, color: 'var(--color-science)' },
        { name: 'Commerce', score: scores.commerce, color: 'var(--color-commerce)' },
        { name: 'Arts', score: scores.arts, color: 'var(--color-arts)' }
    ];

    streams.sort((a, b) => b.score - a.score);
    const topStream = streams[0];

    // Update UI
    document.getElementById('stream-name').textContent = topStream.name;
    document.getElementById('stream-name').style.color = topStream.color;
    document.getElementById('match-percent').textContent = topStream.score + '%';

    // Animate Score Bars
    setTimeout(() => {
        document.getElementById('bar-science').style.width = scores.science + '%';
        document.getElementById('bar-commerce').style.width = scores.commerce + '%';
        document.getElementById('bar-arts').style.width = scores.arts + '%';

        document.getElementById('val-science').textContent = scores.science + '%';
        document.getElementById('val-commerce').textContent = scores.commerce + '%';
        document.getElementById('val-arts').textContent = scores.arts + '%';
    }, 500);

    // Render Degrees
    renderDegrees(topStream.name.toLowerCase());

    // Setup Action Buttons
    setupActions(topStream);
}

function renderDegrees(stream) {
    const grid = document.getElementById('degree-grid');
    const filteredDegrees = degreesData.filter(d => d.stream === stream);

    grid.innerHTML = filteredDegrees.map(d => `
        <div class="degree-card" style="border-top-color: var(--color-${stream})">
            <h3 class="degree-name">${d.name}</h3>
            <div class="degree-meta">
                <span><i class="fas fa-clock"></i> ${d.duration}</span> | 
                <span><i class="fas fa-money-bill-wave"></i> ${d.salary}</span>
            </div>
            <p style="font-size: 14px; margin-bottom: 15px;">${d.description}</p>
            <div class="career-tags">
                ${d.careers.map(c => `<span class="career-tag">${c}</span>`).join('')}
            </div>
            <a href="degree-detail.html?id=${d.id}" class="btn" style="margin-top: 20px; color: var(--color-${stream}); font-weight: 700;">
                View Details <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `).join('');
}

function setupActions(topStream) {
    document.getElementById('btn-share-whatsapp').onclick = () => {
        const text = `Hey! I just found out my ideal career stream is ${topStream.name} using StreamSmart. Check yours too! https://streamsmart.in`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    };

    document.getElementById('btn-save-result').onclick = () => {
        const user = JSON.parse(localStorage.getItem('cp_user'));
        if (!user) {
            alert('Please Login or Register to save your results!');
            window.location.href = 'login.html';
        } else {
            // Logic to save to user profile
            alert('Result saved to your dashboard!');
        }
    };
}

document.addEventListener('DOMContentLoaded', initResult);
