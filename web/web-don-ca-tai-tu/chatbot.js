// Floating Chatbot Widget
class ChatbotWidget {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.suggestions = [
            "Kể cho tôi về Đặng Hoàng Linh",
        ];
        this.init();
    }

    init() {
        this.createWidget();
        this.bindEvents();
        this.loadMessages();
    }

    createWidget() {
        // Create chatbot container
        const chatbot = document.createElement('div');
        chatbot.id = 'chatbot-widget';
        chatbot.innerHTML = `
            <div class="chatbot-toggle" id="chatbot-toggle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z" fill="currentColor"/>
                    <path d="M7 9H17V11H7V9ZM7 12H14V14H7V12Z" fill="currentColor"/>
                </svg>
            </div>
            
            <div class="chatbot-container" id="chatbot-container">
                <div class="chatbot-header">
                    <h3>Trợ lý AI</h3>
                    <button class="chatbot-close" id="chatbot-close">×</button>
                </div>
                
                <div class="chatbot-messages" id="chatbot-messages">
                    <div class="message bot-message">
                        <div class="message-content">
                            <p>Xin chào! Tôi là trợ lý AI, có thể giúp gì cho bạn về câu chuyện Đặng Hoàng Linh không?</p>
                        </div>
                        <div class="message-time">Bây giờ</div>
                    </div>
                </div>
                
                <div class="chatbot-suggestions" id="chatbot-suggestions">
                    ${this.suggestions.map(suggestion => `
                        <button class="suggestion-btn" data-suggestion="${suggestion}">
                            ${suggestion}
                        </button>
                    `).join('')}
                </div>
                
                <div class="chatbot-input">
                    <input type="text" id="chatbot-input" placeholder="Nhập tin nhắn của bạn...">
                    <button id="chatbot-send">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.01 21L23 12 2.01 3 2 10L17 12L2 14L2.01 21Z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(chatbot);
    }

    bindEvents() {
        const toggle = document.getElementById('chatbot-toggle');
        const close = document.getElementById('chatbot-close');
        const input = document.getElementById('chatbot-input');
        const send = document.getElementById('chatbot-send');
        const suggestions = document.getElementById('chatbot-suggestions');

        toggle.addEventListener('click', () => this.toggleChat());
        close.addEventListener('click', () => this.closeChat());
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
        
        send.addEventListener('click', () => this.sendMessage());
        
        // Suggestion buttons
        suggestions.addEventListener('click', (e) => {
            if (e.target.classList.contains('suggestion-btn')) {
                const suggestion = e.target.dataset.suggestion;
                this.addUserMessage(suggestion);
                this.processMessage(suggestion);
            }
        });
    }

    toggleChat() {
        const container = document.getElementById('chatbot-container');
        const toggle = document.getElementById('chatbot-toggle');
        
        if (this.isOpen) {
            this.closeChat();
        } else {
            this.openChat();
        }
    }

    openChat() {
        const container = document.getElementById('chatbot-container');
        const toggle = document.getElementById('chatbot-toggle');
        
        container.style.display = 'block';
        toggle.style.display = 'none';
        this.isOpen = true;
        
        // Focus on input
        setTimeout(() => {
            document.getElementById('chatbot-input').focus();
        }, 300);
    }

    closeChat() {
        const container = document.getElementById('chatbot-container');
        const toggle = document.getElementById('chatbot-toggle');
        
        container.style.display = 'none';
        toggle.style.display = 'flex';
        this.isOpen = false;
    }

    sendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
        
        if (message) {
            this.addUserMessage(message);
            this.processMessage(message);
            input.value = '';
        }
    }

    addUserMessage(message) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user-message';
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${this.escapeHtml(message)}</p>
            </div>
            <div class="message-time">Bây giờ</div>
        `;
        
        messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
        
        // Store message
        this.messages.push({
            role: 'user',
            content: message,
            timestamp: new Date()
        });
    }

    addBotMessage(message) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot-message';
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${message}</p>
            </div>
            <div class="message-time">Bây giờ</div>
        `;
        
        messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
        
        // Store message
        this.messages.push({
            role: 'assistant',
            content: message,
            timestamp: new Date()
        });
    }

    async processMessage(message) {
        // Show typing indicator
        this.showTypingIndicator();
        
        try {
            // Simulate API call (replace with actual OpenAI API)
            const response = await this.callOpenAI(message);
            this.hideTypingIndicator();
            this.addBotMessage(response);
        } catch (error) {
            this.hideTypingIndicator();
            this.addBotMessage('Xin lỗi, tôi gặp sự cố khi xử lý tin nhắn của bạn. Vui lòng thử lại sau.');
        }
    }

    async callOpenAI(message) {
        // OpenAI API integration
        const apiKey = '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'; // User will replace this
        
        // Context about Lộ Lộ for the AI
        const context = `Sinh ra tại An Giang, tuổi thơ của nghệ nhân Đặng Hoàng Linh đã được bao bọc bởi những giai điệu Đờn ca tài tử. Chính tiếng đàn của cha đã gieo vào lòng ông một niềm đam mê sâu sắc, khiến những giai điệu ấy thấm vào máu thịt và trở thành nền tảng cho sự nghiệp sau này.`;
        
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'system',
                            content: `Bạn là một trợ lý AI thân thiện, chuyên gia về câu chuyện của Đặng Hoàng Lâm. Hãy trả lời bằng tiếng Việt một cách tự nhiên và hữu ích. ${context}`
                        },
                        {
                            role: 'user',
                            content: message
                        }
                    ],
                    max_tokens: 300,
                    temperature: 0.7
                })
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data.choices[0].message.content;
            
        } catch (error) {
            console.error('OpenAI API error:', error);
            
            // Fallback responses if API fails
            const fallbackResponses = {
                'đặng hoàng lâm': 'Đặng Hoàng Lâm là một nghệ sĩ Đờn ca tài tử nổi tiếng, trưởng đoàn Đờn ca tài tử.',
            };
            
            // Find best matching response
            const lowerMessage = message.toLowerCase();
            for (const [key, response] of Object.entries(fallbackResponses)) {
                if (lowerMessage.includes(key)) {
                    return response;
                }
            }
            
            // Default response
            return 'Cảm ơn bạn đã hỏi! Đặng Hoàng Lâm là một nghệ sĩ Đờn ca tài tử nổi tiếng. Bạn có muốn biết thêm về câu chuyện của bác ấy không?';
        }
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatbot-messages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        
        messagesContainer.appendChild(typingDiv);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('chatbot-messages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    loadMessages() {
        // Load messages from localStorage if available
        const savedMessages = localStorage.getItem('chatbot-messages');
        if (savedMessages) {
            this.messages = JSON.parse(savedMessages);
        }
    }

    saveMessages() {
        // Save messages to localStorage
        localStorage.setItem('chatbot-messages', JSON.stringify(this.messages));
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ChatbotWidget();
});