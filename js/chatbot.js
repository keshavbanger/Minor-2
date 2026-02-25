/**
 * Marg Chatbot Main Controller
 * Handles UI interactions, message processing, and API communication.
 */

const ChatBot = {
    // State
    isOpen: false,
    isMinimized: false,
    conversationHistory: [],
    isTyping: false,
    messageCount: 0,
    sessionId: null,
    language: localStorage.getItem('cp_chat_lang') || 'EN',
    userName: null,
    userStream: null,

    // DOM Elements
    elements: {},

    init() {
        this.sessionId = this.generateSessionId();
        this.injectHTML(); // Proactive: Injects HTML if not present
        this.loadElements();
        this.loadHistory();
        this.loadUserContext();
        this.bindEvents();
        this.initVoice();

        // Initial state
        setTimeout(() => {
            this.elements.bubble.classList.add('pulse');
        }, 1000);
    },

    injectHTML() {
        if (document.getElementById('chat-window')) return;

        const chatbotHTML = `
            <button id="chat-bubble" class="chat-bubble" onclick="ChatBot.toggle()">
                <span class="bubble-icon">🎓</span>
                <span class="notification-dot" id="chat-notification"></span>
            </button>

            <div id="chat-window" class="chat-window">
                <div class="chat-header">
                    <div class="header-left">
                        <div class="bot-avatar-header">🎓</div>
                        <div class="header-info">
                            <div class="bot-name">Marg</div>
                            <div class="bot-status">
                                <span class="status-dot"></span>
                                <span id="chat-status">Your Career Guide</span>
                            </div>
                        </div>
                    </div>
                    <div class="header-actions">
                        <button onclick="ChatBot.toggleSettings()" title="Settings">⚙</button>
                        <button onclick="ChatBot.minimize()" id="chat-minimize" title="Minimize">−</button>
                        <button onclick="ChatBot.close()" title="Close">✕</button>
                    </div>
                </div>

                <div id="settings-panel" class="settings-panel hidden">
                    <h4>Chat Settings</h4>
                    <div class="setting-item">
                        <label>Language</label>
                        <div class="btn-group">
                            <button onclick="ChatBot.setLanguage('EN')" class="${this.language === 'EN' ? 'active' : ''}">English</button>
                            <button onclick="ChatBot.setLanguage('HI')" class="${this.language === 'HI' ? 'active' : ''}">Hindi</button>
                            <button onclick="ChatBot.setLanguage('HINGLISH')" class="${this.language === 'HINGLISH' ? 'active' : ''}">Hinglish</button>
                        </div>
                    </div>
                    <button class="btn-danger-sm" onclick="ChatBot.clearHistory()">🗑️ Clear Chat History</button>
                </div>

                <div id="chat-body" class="chat-body">
                    <div id="typing-indicator" class="typing-indicator" style="display:none">
                        <div class="bot-avatar">🎓</div>
                        <div class="typing-bubble">
                            <span></span><span></span><span></span>
                            <small>Marg is thinking...</small>
                        </div>
                    </div>
                </div>

                <div class="quick-actions-bar">
                    <button onclick="ChatBot.handleQuickAction('Take me to quiz')" class="quick-action">
                        🎯 <span>Quiz</span>
                    </button>
                    <button onclick="ChatBot.handleQuickAction('Tell me about streams')" class="quick-action">
                        📚 <span>Streams</span>
                    </button>
                    <button onclick="ChatBot.handleQuickAction('Show entrance exams')" class="quick-action">
                        📅 <span>Exams</span>
                    </button>
                    <button onclick="ChatBot.handleQuickAction('Find government colleges')" class="quick-action">
                        🏫 <span>Colleges</span>
                    </button>
                </div>

                <div class="chat-input-area">
                    <button id="voice-btn" class="voice-btn" onclick="ChatBot.startVoice()" title="Voice input">🎤</button>
                    <div class="input-wrapper">
                        <textarea id="chat-input" class="chat-input" placeholder="Ask me anything about your career..." maxlength="500" rows="1"></textarea>
                        <span id="char-count" class="char-count"></span>
                    </div>
                    <button id="chat-send" class="send-btn" onclick="ChatBot.sendFromInput()" disabled>→</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    },

    loadElements() {
        this.elements = {
            bubble: document.getElementById('chat-bubble'),
            window: document.getElementById('chat-window'),
            body: document.getElementById('chat-body'),
            input: document.getElementById('chat-input'),
            sendBtn: document.getElementById('chat-send'),
            typingIndicator: document.getElementById('typing-indicator'),
            charCount: document.getElementById('char-count'),
            settingsPanel: document.getElementById('settings-panel'),
            voiceBtn: document.getElementById('voice-btn')
        };
    },

    bindEvents() {
        this.elements.input.addEventListener('input', () => {
            this.updateCharCount();
            this.elements.sendBtn.disabled = !this.elements.input.value.trim();
        });

        this.elements.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendFromInput();
            }
        });
    },

    toggle() {
        this.isOpen ? this.close() : this.open();
    },

    open() {
        this.isOpen = true;
        this.elements.window.classList.add('active');
        this.elements.bubble.classList.remove('pulse');
        this.elements.input.focus();
        if (this.conversationHistory.length === 0) {
            this.showWelcomeMessages();
        }
        this.scrollToBottom();
    },

    close() {
        this.isOpen = false;
        this.elements.window.classList.remove('active');
    },

    minimize() {
        this.isMinimized = !this.isMinimized;
        this.elements.window.classList.toggle('minimized');
    },

    toggleSettings() {
        this.elements.settingsPanel.classList.toggle('hidden');
    },

    setLanguage(lang) {
        this.language = lang;
        localStorage.setItem('cp_chat_lang', lang);
        document.querySelectorAll('.settings-panel .btn-group button').forEach(btn => {
            btn.classList.toggle('active', btn.textContent.toUpperCase() === lang);
        });
    },

    showWelcomeMessages() {
        const welcome = [
            { text: "Namaste! 🙏 Main hoon Marg — tumhara personal career guide!", delay: 500 },
            { text: "I'm here to help you choose the right stream, find the best degree, and plan your career — completely free!", delay: 1500 },
            { text: "What would you like to know today? 😊", delay: 2500 }
        ];

        welcome.forEach((msg, i) => {
            setTimeout(() => {
                this.addBotMessage(msg.text);
                if (i === welcome.length - 1) {
                    this.showQuickReplies([
                        "Which stream should I choose?",
                        "What degrees are available?",
                        "Tell me about government colleges",
                        "When are entrance exams?"
                    ]);
                }
            }, msg.delay);
        });
    },

    async sendFromInput() {
        const text = this.elements.input.value.trim();
        if (!text) return;
        this.elements.input.value = '';
        this.updateCharCount();
        this.elements.sendBtn.disabled = true;
        await this.sendMessage(text);
    },

    handleQuickAction(text) {
        this.sendMessage(text);
    },

    async sendMessage(text) {
        this.addUserMessage(text);
        this.conversationHistory.push({ role: 'user', content: text, timestamp: Date.now() });
        this.saveHistory();

        this.showTyping();

        // Process message (Rule-based or AI)
        const response = await this.processMessage(text);

        setTimeout(() => {
            this.hideTyping();
            this.addBotMessage(response.message);
            if (response.quickReplies) {
                this.showQuickReplies(response.quickReplies);
            }
            this.conversationHistory.push({ role: 'assistant', content: response.message, timestamp: Date.now() });
            this.saveHistory();
            this.messageCount++;
            this.checkEngagement();
        }, 1000);
    },

    async processMessage(text) {
        // Simple keyword matching (Rule-based)
        const result = RuleBasedBot.process(text, {
            userName: this.userName,
            userStream: this.userStream,
            language: this.language
        });

        if (result.confidence > 0.4) return result;

        // Try AI mode if enabled (Backend call)
        try {
            const apiRes = await fetch('/api/v1/chatbot/message', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text, sessionId: this.sessionId })
            });
            if (apiRes.ok) return await apiRes.json();
        } catch (e) {
            console.warn("AI Bot unavailable, falling back to rule-based.");
        }

        return result; // Fallback to rule-based unknown response
    },

    addUserMessage(text) {
        const div = document.createElement('div');
        div.className = 'chat-message user-message';
        div.innerHTML = `
            <div class="message-content">
                <div class="message-bubble">${this.escapeHTML(text)}</div>
                <div class="message-time">${this.formatTime(Date.now())}</div>
            </div>
        `;
        this.elements.body.appendChild(div);
        this.scrollToBottom();
    },

    addBotMessage(text) {
        const div = document.createElement('div');
        div.className = 'chat-message bot-message';
        div.innerHTML = `
            <div class="bot-avatar">🎓</div>
            <div class="message-content">
                <div class="message-bubble">${this.formatBotText(text)}</div>
                <div class="message-time">${this.formatTime(Date.now())}</div>
            </div>
        `;
        this.elements.body.appendChild(div);
        this.scrollToBottom();
    },

    showQuickReplies(options) {
        const container = document.createElement('div');
        container.className = 'quick-replies';
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'quick-reply-chip';
            btn.textContent = opt;
            btn.onclick = () => {
                container.remove();
                this.sendMessage(opt);
            };
            container.appendChild(btn);
        });
        this.elements.body.appendChild(container);
        this.scrollToBottom();
    },

    showTyping() {
        this.elements.typingIndicator.style.display = 'flex';
        this.scrollToBottom();
    },

    hideTyping() {
        this.elements.typingIndicator.style.display = 'none';
    },

    updateCharCount() {
        const len = this.elements.input.value.length;
        this.elements.charCount.textContent = len > 400 ? `${len}/500` : '';
    },

    scrollToBottom() {
        this.elements.body.scrollTop = this.elements.body.scrollHeight;
    },

    formatBotText(text) {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>')
            .replace(/✅|❌|📌|⚡|💰|🔬|🎨/g, '<span class="emoji">$&</span>');
    },

    escapeHTML(text) {
        const p = document.createElement('p');
        p.textContent = text;
        return p.innerHTML;
    },

    formatTime(ts) {
        return new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    },

    generateSessionId() {
        return 'session_' + Math.random().toString(36).substr(2, 9);
    },

    loadHistory() {
        const saved = localStorage.getItem('cp_chat_history');
        if (saved) {
            this.conversationHistory = JSON.parse(saved);
            this.conversationHistory.slice(-5).forEach(msg => {
                msg.role === 'user' ? this.addUserMessage(msg.content) : this.addBotMessage(msg.content);
            });
        }
    },

    saveHistory() {
        localStorage.setItem('cp_chat_history', JSON.stringify(this.conversationHistory.slice(-20)));
    },

    loadUserContext() {
        const user = localStorage.getItem('cp_user');
        if (user) {
            const parsed = JSON.parse(user);
            this.userName = parsed.fullName;
        }
    },

    clearHistory() {
        if (confirm('Clear all chat history?')) {
            this.conversationHistory = [];
            this.elements.body.innerHTML = '';
            localStorage.removeItem('cp_chat_history');
            this.showWelcomeMessages();
        }
    },

    checkEngagement() {
        if (this.messageCount === 3 && !this.userStream) {
            this.addBotMessage("By the way — want to find your ideal stream? Take our quiz! 🎯");
            this.showQuickReplies(["Take the quiz", "Maybe later"]);
        }
    },

    initVoice() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) return;

        this.recognition = new SpeechRecognition();
        this.recognition.lang = 'hi-IN';
        this.recognition.onresult = (e) => {
            const transcript = e.results[0][0].transcript;
            this.elements.input.value = transcript;
            this.sendFromInput();
        };
    },

    startVoice() {
        if (this.recognition) {
            this.recognition.start();
            this.elements.voiceBtn.classList.add('listening');
            setTimeout(() => this.elements.voiceBtn.classList.remove('listening'), 3000);
        }
    }
};

// Rule-Based Engine
const RuleBasedBot = {
    process(text, context) {
        const normalized = text.toLowerCase().trim();
        let bestIntent = null;
        let maxScore = 0;

        ChatbotIntents.forEach(intent => {
            let score = 0;
            intent.keywords.forEach(kw => {
                if (normalized.includes(kw)) score++;
            });
            const finalScore = score / intent.keywords.length;
            if (finalScore > maxScore) {
                maxScore = finalScore;
                bestIntent = intent;
            }
        });

        if (bestIntent && maxScore > 0.1) {
            let msg = bestIntent.responses[Math.floor(Math.random() * bestIntent.responses.length)];
            if (context.userName) msg = msg.replace('Hello!', `Hello ${context.userName}!`);
            return { message: msg, quickReplies: bestIntent.quickReplies, confidence: maxScore };
        }

        return {
            message: "I'm still learning! 🤔 Try asking about streams, degrees, or colleges.",
            quickReplies: ["Tell me about streams", "Find colleges"],
            confidence: 0
        };
    }
};

// Start
document.addEventListener('DOMContentLoaded', () => ChatBot.init());
