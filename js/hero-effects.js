/**
 * STREAMSMART: HERO EFFECTS ENGINE
 * Implements: Counter, Scroll Reveal.
 */

const HeroEffects = {
    init() {
        this.initCounters();
        this.initScrollReveal();
    },

    // 1. COUNTER ANIMATION
    initCounters() {
        const counters = document.querySelectorAll('.counter');
        const speed = 200;

        const startCounter = (el) => {
            const target = +el.getAttribute('data-target');
            const count = +el.innerText;
            const inc = target / speed;

            if (count < target) {
                el.innerText = Math.ceil(count + inc);
                setTimeout(() => startCounter(el), 1);
            } else {
                el.innerText = target;
            }
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    },

    // 2. SCROLL REVEAL (Optional extra for other sections)
    initScrollReveal() {
        const revealItems = document.querySelectorAll('.section');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                }
            });
        }, { threshold: 0.1 });

        revealItems.forEach(item => observer.observe(item));
    }
};

document.addEventListener('DOMContentLoaded', () => HeroEffects.init());
