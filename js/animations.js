// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    if (!hamburger) return;

    // Ensure drawer and overlay exist
    let drawer = document.getElementById('mobile-drawer');
    let overlay = document.querySelector('.drawer-overlay');

    if (!drawer) {
        drawer = document.createElement('div');
        drawer.id = 'mobile-drawer';
        drawer.innerHTML = `
            <div class="logo" style="margin-bottom: 35px; font-size: 28px; padding-left: 10px; display: flex; align-items: center; gap: 12px; color: var(--color-primary);">
                <i class="fas fa-graduation-cap"></i> StreamSmart
            </div>
            <div class="nav-links-mobile">
                <a href="index.html" class="nav-link"><i class="fas fa-home"></i> Home</a>
                <a href="quiz.html" class="nav-link"><i class="fas fa-clipboard-list"></i> Career Quiz</a>
                <a href="degrees.html" class="nav-link"><i class="fas fa-graduation-cap"></i> Explore Degrees</a>
                <a href="roadmap.html" class="nav-link"><i class="fas fa-road"></i> Career Paths</a>
                <a href="colleges.html" class="nav-link"><i class="fas fa-university"></i> Colleges</a>
                <a href="compare.html" class="nav-link"><i class="fas fa-columns"></i> Compare</a>
                <a href="about.html" class="nav-link"><i class="fas fa-info-circle"></i> About Us</a>
            </div>
            <div style="margin-top: auto; padding-top: 30px; border-top: 1px solid var(--color-border); display: flex; flex-direction: column; gap: 15px;">
                <a href="login.html" class="btn btn-login" style="border: 2px solid var(--color-primary);">Login</a>
                <a href="register.html" class="btn btn-register">Register</a>
            </div>
        `;
        document.body.appendChild(drawer);
    }

    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'drawer-overlay';
        document.body.appendChild(overlay);
    }

    // Close button logic
    let closeBtn = drawer.querySelector('.fa-times');
    if (!closeBtn) {
        closeBtn = document.createElement('i');
        closeBtn.className = 'fas fa-times';
        closeBtn.setAttribute('aria-label', 'Close Mobile Menu');
        closeBtn.style.cssText = 'position: absolute; top: 25px; right: 25px; font-size: 26px; cursor: pointer; color: var(--color-primary); transition: all 0.2s; z-index: 2010; padding: 10px;';
        drawer.appendChild(closeBtn);
    }

    const toggleMenu = (show) => {
        if (show) {
            drawer.classList.add('active');
            overlay.classList.add('active');
            hamburger.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            drawer.classList.remove('active');
            overlay.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    hamburger.onclick = (e) => {
        e.preventDefault();
        const isActive = drawer.classList.contains('active');
        toggleMenu(!isActive);
    };

    closeBtn.onclick = () => toggleMenu(false);
    overlay.onclick = () => toggleMenu(false);

    drawer.querySelectorAll('.nav-link, .btn').forEach(link => {
        link.onclick = () => toggleMenu(false);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') toggleMenu(false);
    });
}

// Stats Counter Animation
function initStatsAnimation() {
    const counters = document.querySelectorAll('.counter');
    if (counters.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.getAttribute('data-target'));
                if (isNaN(countTo)) return;

                let current = 0;
                const duration = 2000;
                const stepTime = Math.max(10, Math.floor(duration / countTo));

                const timer = setInterval(() => {
                    current += Math.ceil(countTo / 100);
                    if (current >= countTo) {
                        current = countTo;
                        clearInterval(timer);
                    }
                    target.innerText = current;
                }, stepTime);

                observer.unobserve(target);
            }
        });
    }, { threshold: 0.1 });

    counters.forEach(counter => observer.observe(counter));
}

// Simple Back to Top
function initBackToTop() {
    let btn = document.querySelector('.btn-back-to-top');
    if (btn) return;

    btn = document.createElement('button');
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.className = 'btn-back-to-top';
    btn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--color-primary);
        color: white;
        border: none;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px);
        transition: all 0.3s ease;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.style.opacity = '1';
            btn.style.visibility = 'visible';
            btn.style.transform = 'translateY(0)';
        } else {
            btn.style.opacity = '0';
            btn.style.visibility = 'hidden';
            btn.style.transform = 'translateY(20px)';
        }
    });

    btn.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
}

// Initialize everything
function init() {
    initMobileMenu();
    initStatsAnimation();
    initBackToTop();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
