const themeToggle = document.createElement('button');
themeToggle.id = 'theme-toggle';
themeToggle.className = 'theme-btn';
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
document.body.appendChild(themeToggle);

const html = document.documentElement;
const currentTheme = localStorage.getItem('cp_theme') || 'light';

if (currentTheme === 'dark') {
    html.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('cp_theme', newTheme);
    themeToggle.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

// Add floating style for toggle
const style = document.createElement('style');
style.textContent = `
    .theme-btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--color-primary);
        color: white;
        border: none;
        cursor: pointer;
        box-shadow: var(--shadow-md);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        transition: var(--transition);
    }
    .theme-btn:hover { transform: scale(1.1); }
`;
document.head.appendChild(style);
