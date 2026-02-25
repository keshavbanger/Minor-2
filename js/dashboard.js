function initDashboard() {
    const user = JSON.parse(localStorage.getItem('cp_user'));
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    document.getElementById('user-name').textContent = user.name;

    // Get stats
    const savedDegrees = JSON.parse(localStorage.getItem('cp_saved_degrees') || '[]');
    const savedColleges = JSON.parse(localStorage.getItem('cp_saved_colleges') || '[]');
    const result = JSON.parse(localStorage.getItem('cp_quiz_result'));

    document.getElementById('count-degrees').textContent = savedDegrees.length;
    document.getElementById('count-colleges').textContent = savedColleges.length;
    document.getElementById('top-stream-label').textContent = result ? findTopStream(result) : 'None';

    renderSavedDegrees(savedDegrees);
}

function findTopStream(scores) {
    let top = { name: '', score: -1 };
    for (let s in scores) {
        if (scores[s] > top.score) {
            top = { name: s.charAt(0).toUpperCase() + s.slice(1), score: scores[s] };
        }
    }
    return top.name;
}

function renderSavedDegrees(ids) {
    const container = document.getElementById('saved-degrees-list');
    if (ids.length === 0) {
        container.innerHTML = `<p style="color: var(--color-text-light);">You haven't saved any degrees yet. <a href="degrees.html">Explore here</a></p>`;
        return;
    }

    const saved = degreesData.filter(d => ids.includes(d.id));
    container.innerHTML = saved.map(d => `
        <div class="degree-card" style="margin-bottom: 10px; border-top: 2px solid var(--color-${d.stream}); padding: 15px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h4 style="margin: 0;">${d.name}</h4>
                <a href="degree-detail.html?id=${d.id}" class="btn btn-login" style="padding: 5px 12px; font-size: 12px;">View</a>
            </div>
        </div>
    `).join('');
}

function handleLogout() {
    localStorage.removeItem('cp_user');
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', initDashboard);
