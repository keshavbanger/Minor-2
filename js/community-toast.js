const communityMessages = [
    "👋 3 students from Indore just joined today!",
    "🎯 Science stream was recommended to 12 students this week",
    "📚 B.Sc. Computer Science is the most saved degree this month",
    "🏫 Government College Bhopal was bookmarked 8 times today",
    "✨ A student from MP just downloaded their career guide!",
    "🎓 47 students completed the career quiz this week"
];

function showCommunityToast() {
    const msg = communityMessages[Math.floor(Math.random() * communityMessages.length)];

    const toast = document.createElement('div');
    toast.className = 'toast community-toast animated fadeInUp';
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-users"></i>
            <span>${msg}</span>
        </div>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 5000);
}

// Add community toast styles
const toastStyle = document.createElement('style');
toastStyle.textContent = `
    .community-toast {
        background: #4f46e5;
        color: white !important;
        border-left: 4px solid #818cf8;
        padding: 12px 20px;
        position: fixed;
        bottom: 20px;
        left: 20px;
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 12px;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
    .community-toast i { color: #818cf8; }
`;
document.head.appendChild(toastStyle);

// Randomly show community activity to create social proof
if (Math.random() > 0.5) {
    setTimeout(showCommunityToast, 3000);
}
