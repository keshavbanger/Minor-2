function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    const colors = {
        success: '#27AE60',
        error: '#E74C3C',
        info: '#1A3C6E'
    };

    toast.style.cssText = `
        background: ${colors[type]};
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 14px;
        transform: translateX(120%);
        transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        display: flex;
        align-items: center;
        gap: 10px;
    `;

    const icon = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle'
    };

    toast.innerHTML = `<i class="fas ${icon[type]}"></i> ${message}`;
    container.appendChild(toast);

    // Animate in
    setTimeout(() => toast.style.transform = 'translateX(0)', 10);

    // Animate out and remove
    setTimeout(() => {
        toast.style.transform = 'translateX(120%)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
