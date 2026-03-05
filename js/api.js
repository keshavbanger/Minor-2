const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:8080/api/v1'
    : 'https://streamsmart-backend.railway.app/api/v1'; // REPLACE with your actual Railway URL


const api = {
    // Auth
    async register(data) {
        return await post('/auth/register', data);
    },

    async login(data) {
        const res = await post('/auth/login', data);
        if (res.token) {
            localStorage.setItem('cp_token', res.token);
            localStorage.setItem('cp_user', JSON.stringify(res.user));
        }
        return res;
    },

    async logout() {
        localStorage.removeItem('cp_token');
        localStorage.removeItem('cp_user');
        window.location.href = 'login.html';
    },

    // Degrees
    async getDegrees(filters = {}) {
        const params = new URLSearchParams(filters);
        return await get('/degrees?' + params);
    },

    async getDegree(slug) {
        return await get('/degrees/' + slug);
    },

    // Colleges
    async getColleges(filters = {}) {
        const params = new URLSearchParams(filters);
        return await get('/colleges?' + params);
    },

    // Entrance Exams
    async getExams(filters = {}) {
        const params = new URLSearchParams(filters);
        return await get('/exams?' + params);
    },

    // Scholarships
    async getScholarships(filters = {}) {
        const params = new URLSearchParams(filters);
        return await get('/scholarships?' + params);
    },

    // Quiz
    async submitQuiz(answers) {
        return await authPost('/quiz/submit', { answers });
    }
};

// Helpers
async function get(endpoint) {
    try {
        const res = await fetch(API_BASE + endpoint);
        if (!res.ok) throw new Error('Network response was not ok');
        return await res.json();
    } catch (err) {
        console.error('API Error:', err);
        throw err;
    }
}

async function post(endpoint, data) {
    const res = await fetch(API_BASE + endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return await res.json();
}

async function authPost(endpoint, data) {
    const token = localStorage.getItem('cp_token');
    const res = await fetch(API_BASE + endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
    });
    return await res.json();
}
