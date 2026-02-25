function initLottie() {
    // Homepage Hero
    const heroContainer = document.getElementById('lottie-hero');
    if (heroContainer) {
        lottie.loadAnimation({
            container: heroContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets4.lottiefiles.com/packages/lf20_w51pcehl.json' // Education/Books animation
        });
    }

    // Success Check (Quiz Result)
    const successContainer = document.getElementById('lottie-success');
    if (successContainer) {
        lottie.loadAnimation({
            container: successContainer,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: 'https://assets2.lottiefiles.com/packages/lf20_pqn0kzay.json' // Celebration confetti
        });
    }

    // Thinking/Loading
    const loadingContainer = document.getElementById('lottie-loading');
    if (loadingContainer) {
        lottie.loadAnimation({
            container: loadingContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets8.lottiefiles.com/packages/lf20_m6cuL6.json' // Brain processing
        });
    }
}

// Support for Lottie integration
window.addEventListener('DOMContentLoaded', () => {
    if (typeof lottie !== 'undefined') {
        initLottie();
    }
});
