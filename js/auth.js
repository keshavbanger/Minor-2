function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    const icon = input.nextElementSibling;
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        // Simulate Login
        const user = {
            name: "Rahul Kumar",
            email: email,
            class: "Class 12",
            stream: "Science"
        };
        localStorage.setItem('cp_user', JSON.stringify(user));
        showToast('Successfully logged in!', 'success');
        setTimeout(() => window.location.href = 'dashboard.html', 1000);
    } else {
        showToast('Please fill all fields', 'error');
    }
}

function handleRegister(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        showToast('Passwords do not match!', 'error');
        return;
    }

    if (name && email && phone && password) {
        const user = {
            name: name,
            email: email,
            phone: phone,
            class: document.getElementById('class-select').value
        };
        localStorage.setItem('cp_user', JSON.stringify(user));
        showToast('Account created successfully!', 'success');
        setTimeout(() => window.location.href = 'dashboard.html', 1500);
    } else {
        showToast('Please fill all fields', 'error');
    }
}

function checkAutoLogin() {
    if (localStorage.getItem('cp_user') &&
        (window.location.pathname.includes('login.html') || window.location.pathname.includes('register.html'))) {
        window.location.href = 'dashboard.html';
    }
}

document.addEventListener('DOMContentLoaded', checkAutoLogin);
