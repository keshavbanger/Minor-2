// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navAuth = document.querySelector('.nav-auth');

    if (hamburger) {
        hamburger.onclick = () => {
            // Check if drawer already exists
            let drawer = document.getElementById('mobile-drawer');
            if (drawer) {
                drawer.classList.toggle('active');
            } else {
                // Create drawer
                drawer = document.createElement('div');
                drawer.id = 'mobile-drawer';
                drawer.style.cssText = `
                    position: fixed;
                    top: 0;
                    right: 0;
                    width: 300px;
                    height: 100vh;
                    background: white;
                    z-index: 2000;
                    padding: 40px;
                    box-shadow: -5px 0 15px rgba(0,0,0,0.1);
                    transform: translateX(100%);
                    transition: transform 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                `;

                const closeBtn = document.createElement('i');
                closeBtn.className = 'fas fa-times';
                closeBtn.style.cssText = 'position: absolute; top: 20px; right: 20px; font-size: 24px; cursor: pointer;';
                closeBtn.onclick = () => drawer.classList.remove('active');

                drawer.innerHTML = `
                    <h3 style="margin-bottom: 20px;">StreamSmart Menu</h3>
                    <a href="index.html" class="nav-link" style="font-size: 18px;">Home</a>
                    <a href="quiz.html" class="nav-link" style="font-size: 18px;">Career Quiz</a>
                    <a href="degrees.html" class="nav-link" style="font-size: 18px;">Explore Degrees</a>
                    <a href="roadmap.html" class="nav-link" style="font-size: 18px;">Career Paths</a>
                    <a href="colleges.html" class="nav-link" style="font-size: 18px;">Colleges</a>
                    <hr style="border: none; border-top: 1px solid var(--color-border);">
                    <a href="login.html" class="btn btn-login" style="width: 100%;">Login</a>
                    <a href="register.html" class="btn btn-register" style="width: 100%;">Register</a>
                `;
                drawer.appendChild(closeBtn);
                document.body.appendChild(drawer);

                // Force reflow
                setTimeout(() => drawer.classList.add('active'), 10);
            }
        };
    }
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
