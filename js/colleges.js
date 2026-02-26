/**
 * STREAMSMART: COLLEGES PAGE LOGIC
 * Manages filtering, rendering, and UI interactions
 */

let activeCourse = 'B.Tech';
let activeType = 'all';
let activeState = 'all';
let activeBtechTab = 'govt';

function initCollegesPage() {
    // Check for URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const courseParam = urlParams.get('course');
    const stateParam = urlParams.get('state');

    if (courseParam) activeCourse = courseParam;
    if (stateParam) activeState = stateParam;

    updateFilterUI();
    renderAll();
}

function updateFilterUI() {
    // Update Course Pills
    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(pill => {
        if (pill.textContent === activeCourse) pill.classList.add('active');
        else pill.classList.remove('active');
    });

    // Update Type Toggles
    document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`type-${activeType}`).classList.add('active');

    // Update State Dropdown
    document.getElementById('state-filter').value = activeState;
}

function filterByCourse(course) {
    activeCourse = course;
    updateFilterUI();
    renderAll();

    // Scroll to results top
    window.scrollTo({ top: 350, behavior: 'smooth' });
}

function filterByType(type) {
    activeType = type;
    updateFilterUI();
    renderAll();
}

function filterByState(state) {
    activeState = state;
    updateFilterUI();
    renderAll();
}

function switchFeatTab(tab) {
    activeBtechTab = tab;
    document.getElementById('feat-govt-tab').classList.toggle('active', tab === 'govt');
    document.getElementById('feat-pvt-tab').classList.toggle('active', tab === 'private');
    renderAll();
}

function renderAll() {
    renderFeaturedBtech();
    renderMPColleges();
    renderMainGrid();
}

function renderFeaturedBtech() {
    const section = document.getElementById('btech-featured');
    const grid = document.getElementById('featured-grid');

    if (activeCourse !== 'B.Tech') {
        section.style.display = 'none';
        return;
    }
    section.style.display = 'block';

    const featured = COLLEGES_DATA.filter(c =>
        c.course === 'B.Tech' &&
        (activeBtechTab === 'govt' ? c.isGovernment : !c.isGovernment)
    );

    grid.innerHTML = featured.map(c => generateCollegeCard(c)).join('');
}

function renderMPColleges() {
    const grid = document.getElementById('mp-grid');
    const mpColleges = COLLEGES_DATA.filter(c =>
        c.isMP === true &&
        (activeCourse === 'all' || c.course === activeCourse)
    );

    if (mpColleges.length === 0) {
        document.getElementById('mp-section').style.display = 'none';
    } else {
        document.getElementById('mp-section').style.display = 'block';
        grid.innerHTML = mpColleges.map(c => generateCollegeCard(c)).join('');
    }
}

function renderMainGrid() {
    const grid = document.getElementById('main-college-grid');
    const summ = document.getElementById('results-summ');

    const filtered = COLLEGES_DATA.filter(c => {
        const matchesCourse = activeCourse === 'all' || c.course === activeCourse;
        const matchesType = activeType === 'all' ||
            (activeType === 'govt' ? c.isGovernment : !c.isGovernment);
        const matchesState = activeState === 'all' || c.state === activeState;

        return matchesCourse && matchesType && matchesState;
    });

    summ.textContent = `Showing ${filtered.length} colleges matching your filters`;
    grid.innerHTML = filtered.map(c => generateCollegeCard(c)).join('');
}

function generateCollegeCard(c) {
    const typeClass = c.isGovernment ? 'govt' : 'pvt';
    const typeLabel = c.isGovernment ? 'Government' : 'Private';
    const feeColorClass = c.isGovernment ? 'fee-govt' : 'fee-pvt';

    return `
        <div class="college-card" id="card-${c.id}">
            <div class="card-strip ${typeClass}"></div>
            <div class="card-body">
                <div class="card-header">
                    <span class="badge-type badge-${typeClass}">${typeLabel}</span>
                    <span class="badge-nirf">NIRF #${c.nirf}</span>
                </div>
                <h3 class="college-name">${c.name}</h3>
                <div class="college-loc">
                    <i class="fas fa-map-marker-alt"></i> ${c.location}, ${c.state}
                </div>
                
                <div class="divider"></div>
                
                <div class="fees-box">
                    <span class="label">ANNUAL TUITION FEES</span>
                    <span class="fee-amount ${feeColorClass}">₹${c.fees_annual.toLocaleString()}</span>
                    <span class="total-course">Total Course: ₹${c.fees_total.toLocaleString()}</span>
                </div>

                <div class="info-mini-grid">
                    <div class="info-cell">
                        <span class="label">Entrance</span>
                        <span class="value">${c.entrance}</span>
                    </div>
                    <div class="info-cell">
                        <span class="label">Duration</span>
                        <span class="value">${c.duration}</span>
                    </div>
                    <div class="info-cell">
                        <span class="label">Avg Package</span>
                        <span class="value">${c.package}</span>
                    </div>
                    <div class="info-cell">
                        <span class="label">NAAC</span>
                        <span class="value">${c.naac}</span>
                    </div>
                </div>

                <div class="highlight-tag">
                    ${c.highlight}
                </div>

                ${c.isMP ? `
                    <div class="mp-badges">
                        <span class="mp-scholar-badge">₹ MP Scholarship Eligible</span>
                    </div>
                ` : ''}

                <div style="margin-top:20px;">
                    <button class="view-btn" onclick="toggleExpand('${c.id}')">View Details & Apply</button>
                    
                    <div class="expanded-content" id="expand-${c.id}">
                        <div class="expand-section-title">
                            <i class="fas fa-list-ul"></i> Popular Branches
                        </div>
                        <div class="branches-tags">
                            ${c.extra.branches.map(b => `<span class="branch-tag">${b}</span>`).join('')}
                        </div>

                        <div class="expand-section-title">
                            <i class="fas fa-gift"></i> Scholarships
                        </div>
                        <p style="font-size:12px; color:#64748b; margin-bottom:15px;">
                            ${c.extra.scholarships.join(', ')}
                        </p>

                        <div class="expand-section-title">
                            <i class="fas fa-building"></i> Top Recruiters
                        </div>
                        <p style="font-size:12px; color:#64748b; margin-bottom:20px;">
                            ${c.extra.companies.join(' • ')}
                        </p>

                        <button class="view-btn" style="background:#1a3c6e; color:white;" 
                                onclick="openModal('${c.id}')">Full Fee Breakdown</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function toggleExpand(id) {
    const el = document.getElementById(`expand-${id}`);
    el.classList.toggle('active');

    // Smooth scroll to expanded area if opening
    if (el.classList.contains('active')) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function openModal(id) {
    const c = COLLEGES_DATA.find(coll => coll.id === id);
    const modal = document.getElementById('college-modal');
    const content = document.getElementById('modal-content');

    const b = c.extra.breakdown;
    const totalYear = b.tuition + b.hostel + b.other;

    content.innerHTML = `
        <span class="close-modal" onclick="closeModal()">&times;</span>
        <h2 style="color:#1a3c6e; margin-bottom:10px;">${c.name}</h2>
        <p style="color:#64748b; margin-bottom:25px;">Verified Institutional Fee Structure</p>
        
        <table class="fee-table">
            <tr><th>Component</th><th>Amount (Annual)</th></tr>
            <tr><td>Tuition Fee</td><td>₹${b.tuition.toLocaleString()}</td></tr>
            <tr><td>Hostel & Mess</td><td>₹${b.hostel.toLocaleString()}</td></tr>
            <tr><td>Admin/Library/Other</td><td>₹${b.other.toLocaleString()}</td></tr>
            <tr style="background:#f8fafc">
                <td style="font-weight:800; color:#1a3c6e">TOTAL PER YEAR</td>
                <td style="font-weight:800; color:#10b981">₹${totalYear.toLocaleString()}</td>
            </tr>
            <tr>
                <td style="font-weight:800; color:#64748b">TOTAL ${c.duration} COURSE</td>
                <td style="font-weight:800; color:#1a3c6e">₹${c.fees_total.toLocaleString()}</td>
            </tr>
        </table>

        <div style="background:#eff6ff; padding:20px; border-radius:15px; margin-top:20px;">
            <h4 style="color:#1a3c6e; margin-bottom:8px;">How to Apply</h4>
            <p style="font-size:13px; color:#475569; line-height:1.6;">
                Admission to this college is strictly via <strong>${c.entrance}</strong>. 
                Candidates must register on the official portal and participate in counseling.
            </p>
            <a href="${c.extra.website}" target="_blank" class="view-btn" 
               style="display:inline-block; text-align:center; width:auto; padding:8px 20px; margin-top:10px; background:#1a3c6e; color:white;">
               Visit Official Website <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scroll
}

function closeModal() {
    document.getElementById('college-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
window.onclick = function (event) {
    const modal = document.getElementById('college-modal');
    if (event.target == modal) closeModal();
}

document.addEventListener('DOMContentLoaded', initCollegesPage);
