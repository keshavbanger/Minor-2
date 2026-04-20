/**
 * STREAMSMART: MARG AI CHATBOT ENGINE (Gemini Integration)
 * Transitions from keyword matching to a real-time AI backend.
 */

const ChatBot = {
    // State
    isOpen: false,
    isTyping: false,
    messageCount: 0,
    conversationHistory: [],
    sessionStarted: false,

    // Backend Configuration (Matches your Spring Boot setup)
    apiEndpoint: '/api/v1/chatbot/message',

    // Elements
    elements: {},

    init() {
        this.loadElements();
        this.loadHistory();
        this.bindEvents();

        // Proactive notification dot
        setTimeout(() => {
            if (!this.sessionStarted && !this.isOpen) {
                const dot = document.getElementById('chat-notification');
                if (dot) dot.style.display = 'block';
            }
        }, 4000);
    },

    loadElements() {
        this.elements = {
            bubble: document.getElementById('chat-bubble'),
            window: document.getElementById('chat-window'),
            body: document.getElementById('chat-body'),
            input: document.getElementById('chat-input'),
            sendBtn: document.getElementById('chat-send'),
            typing: document.getElementById('typing-indicator'),
            dot: document.getElementById('chat-notification')
        };
    },

    bindEvents() {
        if (this.elements.input) {
            this.elements.input.addEventListener('input', () => {
                this.elements.sendBtn.disabled = !this.elements.input.value.trim();
            });

            this.elements.input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    this.sendFromInput();
                }
            });
        }
    },

    open() {
        this.isOpen = true;
        this.elements.window.classList.add('active');
        this.elements.bubble.classList.remove('pulse');
        if (this.elements.dot) this.elements.dot.style.display = 'none';

        if (this.conversationHistory.length === 0 && !this.sessionStarted) {
            this.showWelcomeSequence();
        }

        this.sessionStarted = true;
        setTimeout(() => this.elements.input.focus(), 300);
    },

    close() {
        this.isOpen = false;
        this.elements.window.classList.remove('active');
        this.elements.window.classList.remove('minimized');
        setTimeout(() => {
            if (!this.isOpen) this.elements.bubble.classList.add('pulse');
        }, 3000);
    },

    minimize() {
        this.elements.window.classList.toggle('minimized');
    },

    async showWelcomeSequence() {
        for (const msg of WELCOME_MESSAGES) {
            this.showTyping();
            await new Promise(r => setTimeout(r, 600));
            this.hideTyping();
            this.renderBotMessage(msg);
        }
        this.renderQuickReplies(WELCOME_QUICK_REPLIES);
    },

    sendFromInput() {
        const text = this.elements.input.value.trim();
        if (!text) return;
        this.elements.input.value = '';
        this.elements.sendBtn.disabled = true;
        this.handleUserMessage(text);
    },

    handleQuickReply(text) {
        const qrs = document.querySelectorAll('.quick-replies');
        qrs.forEach(el => el.remove());
        this.handleUserMessage(text);
    },

    /**
     * CORE LOGIC: Send message to Backend AI
     */
    async handleUserMessage(text) {
        if (this.isTyping) return;

        // 1. Render User Message
        this.renderUserMessage(text);
        this.conversationHistory.push({ role: 'user', content: text, time: this.formatTime() });
        this.messageCount++;

        // 2. Show Loading Animation
        this.showTyping();

        try {
            // 3. Fetch from Spring Boot API
            const response = await fetch(this.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: text })
            });

            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();

            // 4. Hide Typing & Render Response
            this.hideTyping();

            // Note: Support both 'reply' and 'message'
            const botReply = data.reply || data.message || "I'm sorry, I couldn't process that.";

            this.renderBotMessage(botReply);

            // Handle optional quick replies from AI if available
            if (data.quickReplies && data.quickReplies.length > 0) {
                this.renderQuickReplies(data.quickReplies);
            }

            this.conversationHistory.push({ role: 'bot', content: botReply, time: this.formatTime() });
            this.saveHistory();

        } catch (error) {
            console.error("ChatBot API Error:", error);
            this.hideTyping();
            this.renderBotMessage("I'm having a bit of trouble connecting to my brain right now. Please check your internet or try again in a moment! 🌐");
            this.elements.sendBtn.disabled = false;
        }

        this.checkEngagementTriggers();
    },

    renderUserMessage(text) {
        const div = document.createElement('div');
        div.className = 'chat-message user-message';
        div.innerHTML = `<div class="message-bubble user-bubble">${this.escapeHTML(text)}</div>`;
        this.elements.body.appendChild(div);
        this.scrollBottom();
    },

    renderBotMessage(text) {
        const div = document.createElement('div');
        div.className = 'chat-message bot-message';
        div.innerHTML = `
            <div class="bot-avatar">🎓</div>
            <div class="message-content">
                <div class="message-bubble bot-bubble">${this.formatBotText(text)}</div>
                <div class="message-time">${this.formatTime()}</div>
            </div>
        `;
        this.elements.body.appendChild(div);
        this.scrollBottom();
    },

    renderQuickReplies(options) {
        const container = document.createElement('div');
        container.className = 'quick-replies';
        options.forEach(opt => {
            const chip = document.createElement('button');
            chip.className = 'quick-reply-chip';
            chip.textContent = opt;
            chip.onclick = () => this.handleQuickReply(opt);
            container.appendChild(chip);
        });
        this.elements.body.appendChild(container);
        this.scrollBottom();
    },

    showTyping() {
        this.isTyping = true;
        this.elements.typing.style.display = 'flex';
        this.scrollBottom();
    },

    hideTyping() {
        this.isTyping = false;
        this.elements.typing.style.display = 'none';
    },

    scrollBottom() {
        setTimeout(() => {
            if (this.elements.body) {
                this.elements.body.scrollTop = this.elements.body.scrollHeight;
            }
        }, 50);
    },

    formatBotText(text) {
        return text
            .replace(/\n/g, '<br>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    },

    escapeHTML(text) {
        return text.replace(/[&<>"']/g, m => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        })[m]);
    },

    formatTime() {
        const now = new Date();
        return now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
    },

    saveHistory() {
        localStorage.setItem('cp_chat_history', JSON.stringify(this.conversationHistory.slice(-20)));
    },

    loadHistory() {
        try {
            const saved = localStorage.getItem('cp_chat_history');
            if (saved) {
                this.conversationHistory = JSON.parse(saved);
                this.conversationHistory.forEach(msg => {
                    if (msg.role === 'user') this.renderUserMessage(msg.content);
                    else this.renderBotMessage(msg.content);
                });
                this.sessionStarted = true;
                this.scrollBottom();
            }
        } catch (e) {
            localStorage.removeItem('cp_chat_history');
        }
    },

    checkEngagementTriggers() {
        const hasQuizResult = localStorage.getItem('cp_quiz_results');
        if (this.messageCount === 4 && !hasQuizResult) {
            setTimeout(() => {
                this.renderBotMessage("By the way, have you tried our Career Quiz yet? It's the most accurate way to find your perfect stream match!");
                this.renderQuickReplies(["Start Career Quiz", "Maybe Later"]);
            }, 3000);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => ChatBot.init());
