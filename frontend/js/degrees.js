let currentStream = 'all';
let searchQuery = '';
let currentDuration = 'all';

function initExplorer() {
    renderDegrees();

    // Search logic
    document.getElementById('search-input').oninput = (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderDegrees();
    };

    // Filter logic
    document.querySelectorAll('.stream-tab').forEach(tab => {
        tab.onclick = () => {
            document.querySelectorAll('.stream-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentStream = tab.dataset.stream;
            renderDegrees();
        };
    });

    document.getElementById('duration-filter').onchange = (e) => {
        currentDuration = e.target.value;
        renderDegrees();
    };
}

function renderDegrees() {
    const grid = document.getElementById('explorer-grid');
    const resultCount = document.getElementById('result-count');

    const filtered = degreesData.filter(d => {
        const matchesStream = currentStream === 'all' || d.stream === currentStream;
        const matchesSearch = d.name.toLowerCase().includes(searchQuery) ||
            d.careers.some(c => c.toLowerCase().includes(searchQuery));
        const matchesDuration = currentDuration === 'all' || d.duration.includes(currentDuration);

        return matchesStream && matchesSearch && matchesDuration;
    });

    resultCount.textContent = `Showing ${filtered.length} degrees`;

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: var(--spacing-xl);">
                <i class="fas fa-search fa-4x" style="color: var(--color-border); margin-bottom: 20px;"></i>
                <h3>No degrees found match your search.</h3>
                <p>Try broading your filters or searching for something else.</p>
            </div>
        `;
        return;
    }

    const savedDegrees = JSON.parse(localStorage.getItem('cp_saved_degrees') || '[]');

    grid.innerHTML = filtered.map(d => {
        const isSaved = savedDegrees.includes(d.id);
        return `
            <div class="degree-card" style="border-top-color: var(--color-${d.stream}); position: relative;" data-aos="fade-up">
                <button class="save-btn ${isSaved ? 'saved' : ''}" onclick="toggleSave('${d.id}')">
                    <i class="${isSaved ? 'fas' : 'far'} fa-heart"></i>
                </button>
                <span class="career-tag" style="background: var(--color-${d.stream}); color: white; margin-bottom: 10px;">${d.stream}</span>
                <h3 class="degree-name">${d.name}</h3>
                <div class="degree-meta">
                    <span><i class="fas fa-clock"></i> ${d.duration}</span> | 
                    <span><i class="fas fa-money-bill-wave"></i> ${d.salary}</span>
                </div>
                <div class="career-tags">
                    ${d.careers.map(c => `<span class="career-tag">${c}</span>`).join('')}
                </div>
                <a href="degree-detail.html?id=${d.id}" class="btn" style="margin-top: 20px; color: var(--color-primary); font-weight: 700; border: 1px solid var(--color-border); width: 100%; border-radius: 8px;">
                    View Detailed Path
                </a>
            </div>
        `;
    }).join('');
}

function toggleSave(id) {
    let saved = JSON.parse(localStorage.getItem('cp_saved_degrees') || '[]');
    if (saved.includes(id)) {
        saved = saved.filter(sid => sid !== id);
        showToast('Degree removed from bookmarks', 'info');
    } else {
        saved.push(id);
        showToast('Degree saved to bookmarks!', 'success');
    }
    localStorage.setItem('cp_saved_degrees', JSON.stringify(saved));
    renderDegrees();
}

document.addEventListener('DOMContentLoaded', initExplorer);
