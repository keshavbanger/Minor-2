let currentStreamFilter = 'all';
let currentDistrictFilter = 'all';
let collegeSearchQuery = '';

function initColleges() {
    renderColleges();

    document.getElementById('college-search').oninput = (e) => {
        collegeSearchQuery = e.target.value.toLowerCase();
        renderColleges();
    };

    document.getElementById('stream-filter').onchange = (e) => {
        currentStreamFilter = e.target.value;
        renderColleges();
    };

    document.getElementById('district-filter').onchange = (e) => {
        currentDistrictFilter = e.target.value;
        renderColleges();
    };
}

function renderColleges() {
    const grid = document.getElementById('college-grid');
    const count = document.getElementById('college-count');

    const filtered = collegesData.filter(c => {
        const matchesStream = currentStreamFilter === 'all' || c.streams.includes(currentStreamFilter);
        const matchesDistrict = currentDistrictFilter === 'all' || c.district === currentDistrictFilter;
        const matchesSearch = c.name.toLowerCase().includes(collegeSearchQuery) ||
            c.location.toLowerCase().includes(collegeSearchQuery);

        return matchesStream && matchesDistrict && matchesSearch;
    });

    count.textContent = `Showing ${filtered.length} Government Colleges`;

    grid.innerHTML = filtered.map(c => `
        <div class="college-card" data-aos="fade-up">
            <span class="college-type">${c.type}</span>
            <h3 class="college-name">${c.name}</h3>
            <div class="college-info-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>${c.location}</span>
            </div>
            <div class="college-info-item">
                <i class="fas fa-graduation-cap"></i>
                <span>${c.courses.join(', ')}</span>
            </div>
            <div class="college-streams">
                ${c.streams.map(s => `<span class="stream-badge badge-${s.toLowerCase()}">${s}</span>`).join('')}
            </div>
            <div class="college-footer">
                <span class="fees-label">${c.fees}</span>
                <a href="college-detail.html?id=${c.id}" class="btn btn-login" style="padding: 6px 15px; font-size: 13px;">View Details</a>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', initColleges);
