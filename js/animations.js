// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    if (!hamburger) {
        console.log('Mobile Menu: Hamburger icon not found.');
        return;
    }

    console.log('Mobile Menu: Initializing...');

    // Pre-create elements for smoother first interaction
    let drawer = document.getElementById('mobile-drawer');
    let overlay = document.querySelector('.drawer-overlay');

    if (!drawer) {
        overlay = document.createElement('div');
        overlay.className = 'drawer-overlay';
        document.body.appendChild(overlay);

        drawer = document.createElement('div');
        drawer.id = 'mobile-drawer';

        const closeBtn = document.createElement('i');
        closeBtn.className = 'fas fa-times';
        closeBtn.setAttribute('aria-label', 'Close Mobile Menu');
        closeBtn.style.cssText = 'position: absolute; top: 25px; right: 25px; font-size: 26px; cursor: pointer; color: var(--color-primary); transition: all 0.2s; z-index: 2010; padding: 10px;';
        closeBtn.onmouseover = () => closeBtn.style.color = 'var(--color-secondary)';
        closeBtn.onmouseout = () => closeBtn.style.color = 'var(--color-primary)';

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

        drawer.appendChild(closeBtn);
        document.body.appendChild(drawer);

        const closeMenu = () => {
            drawer.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        };

        closeBtn.onclick = closeMenu;
        overlay.onclick = closeMenu;

        drawer.querySelectorAll('.nav-link, .btn').forEach(link => {
            link.onclick = closeMenu;
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && drawer.classList.contains('active')) {
                closeMenu();
            }
        });
    }

    hamburger.onclick = (e) => {
        e.preventDefault();
        const isActive = drawer.classList.contains('active');
        if (isActive) {
            drawer.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        } else {
            drawer.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };
}

// Stats Counter Animation
function initStatsAnimation() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const startCounter = (target) => {
        const value = +target.innerText;
        const count = +target.dataset.count || 0;
        const inc = value / speed;

        if (count < value) {
            target.dataset.count = count + inc;
            target.innerText = Math.ceil(count + inc);
            setTimeout(() => startCounter(target), 1);
        } else {
            target.innerText = value;
        }
    };

    // Use Intersection Observer for stats
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 1 });

    counters.forEach(c => {
        const val = c.innerText;
        c.innerText = '0';
        c.dataset.count = '0';
        // Re-add the target value to the dataset if needed, but innerText is fine if we store it
        c.setAttribute('data-target', val.replace('+', '').replace('%', ''));
        // Wait, let's just use the target value from a data attribute
    });
}

// Simple Back to Top
function initBackToTop() {
    const btn = document.createElement('button');
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
        box-shadow: var(--shadow-md);
        cursor: pointer;
        opacity: 0;
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
            btn.style.transform = 'translateY(0)';
        } else {
            btn.style.opacity = '0';
            btn.style.transform = 'translateY(20px)';
        }
    });

    btn.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
}

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initBackToTop();
});
