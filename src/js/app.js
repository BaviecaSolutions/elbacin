// DOM Elements
const messagesWrapper = document.getElementById('messages-wrapper');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const welcomeScreen = document.getElementById('welcome-screen');
const chatContainer = document.getElementById('chat-container');
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const newChatBtn = document.querySelector('.new-chat-btn');
const suggestionCards = document.querySelectorAll('.suggestion-card');
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const starsContainer = document.getElementById('stars-container');

// State
let isProcessing = false;
let currentTheme = localStorage.getItem('theme') || 'light';
let sessionId = localStorage.getItem('sessionId') || generateSessionId();

// Theme order: light -> dark -> christmas -> romeria -> light
const themes = ['light', 'dark', 'christmas', 'romeria'];

// API Configuration
const API_URL = window.location.origin + '/api/chat';

// Generate unique session ID
function generateSessionId() {
    const id = 'session_' + Date.now() + '_' + Math.random().toString(36).substring(2, 11);
    localStorage.setItem('sessionId', id);
    return id;
}

// Initialize theme
document.body.classList.toggle('dark-theme', currentTheme === 'dark');
document.body.classList.toggle('christmas-theme', currentTheme === 'christmas');
document.body.classList.toggle('romeria-theme', currentTheme === 'romeria');

// Event Listeners
sendButton.addEventListener('click', handleSendMessage);
messageInput.addEventListener('input', handleInputChange);
messageInput.addEventListener('keydown', handleKeyDown);
newChatBtn.addEventListener('click', handleNewChat);
menuToggle.addEventListener('click', toggleSidebar);
themeToggle.addEventListener('click', toggleTheme);
themeToggleMobile.addEventListener('click', toggleTheme);

// Suggestion cards
suggestionCards.forEach(card => {
    card.addEventListener('click', () => {
        const text = card.querySelector('span').textContent;
        messageInput.value = text;
        handleInputChange();
        messageInput.focus();
    });
});

// === THEME MANAGEMENT ===
function toggleTheme() {
    // Cycle through themes: light -> dark -> christmas -> romeria -> light
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    currentTheme = themes[nextIndex];

    // Remove all theme classes
    document.body.classList.remove('dark-theme', 'christmas-theme', 'romeria-theme');

    // Add appropriate theme class and generate decorations
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        generateStars();
    } else if (currentTheme === 'christmas') {
        document.body.classList.add('christmas-theme');
        generateSnow();
        generateChristmasLights();
    } else if (currentTheme === 'romeria') {
        document.body.classList.add('romeria-theme');
        generateFlowers();
        generateFlags();
    }

    localStorage.setItem('theme', currentTheme);
}

// Generate animated stars for dark theme
function generateStars() {
    starsContainer.innerHTML = '';
    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = Math.random() > 0.8 ? 'star bright' : 'star';

        // Random position
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';

        // Random animation delay
        star.style.animationDelay = Math.random() * 3 + 's';

        starsContainer.appendChild(star);
    }
}

// Generate snow for Christmas theme
function generateSnow() {
    const snowContainer = document.getElementById('snow-container');
    snowContainer.innerHTML = '';
    const numberOfSnowflakes = 50;

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = '❄';

        // Random position
        snowflake.style.left = Math.random() * 100 + '%';

        // Random size
        const size = 0.5 + Math.random() * 1;
        snowflake.style.fontSize = size + 'em';

        // Random animation duration (slower = more realistic)
        const duration = 10 + Math.random() * 20;
        snowflake.style.animationDuration = duration + 's';

        // Random animation delay
        snowflake.style.animationDelay = Math.random() * 10 + 's';

        snowContainer.appendChild(snowflake);
    }
}

// Generate Christmas lights
function generateChristmasLights() {
    const lightsContainer = document.getElementById('christmas-lights');
    lightsContainer.innerHTML = '';
    const numberOfLights = 30;

    for (let i = 0; i < numberOfLights; i++) {
        const light = document.createElement('div');
        light.className = 'light';
        lightsContainer.appendChild(light);
    }
}

// Generate flowers for Romería theme
function generateFlowers() {
    const flowersContainer = document.getElementById('flowers-container');
    flowersContainer.innerHTML = '';
    const flowers = ['🌸', '🌺', '🌻', '🌼', '🌷', '🏵️'];
    const numberOfFlowers = 15;

    for (let i = 0; i < numberOfFlowers; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

        // Random position
        flower.style.left = Math.random() * 100 + '%';
        flower.style.top = Math.random() * 100 + '%';

        // Random animation delay
        flower.style.animationDelay = Math.random() * 6 + 's';

        flowersContainer.appendChild(flower);
    }
}

// Generate colorful flags for Romería theme
function generateFlags() {
    const flagsContainer = document.getElementById('flags-container');
    flagsContainer.innerHTML = '';
    const numberOfFlags = 25;

    for (let i = 0; i < numberOfFlags; i++) {
        const flag = document.createElement('div');
        flag.className = 'flag';
        flagsContainer.appendChild(flag);
    }
}

// Initialize decorations based on starting theme
if (currentTheme === 'dark') {
    generateStars();
} else if (currentTheme === 'christmas') {
    generateSnow();
    generateChristmasLights();
} else if (currentTheme === 'romeria') {
    generateFlowers();
    generateFlags();
}

// === MESSAGE HANDLING ===
function handleInputChange() {
    // Auto-resize textarea
    messageInput.style.height = 'auto';
    messageInput.style.height = messageInput.scrollHeight + 'px';

    // Enable/disable send button
    const hasText = messageInput.value.trim().length > 0;
    sendButton.disabled = !hasText || isProcessing;
}

function handleKeyDown(event) {
    // Send on Enter (without Shift)
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        if (!sendButton.disabled) {
            handleSendMessage();
        }
    }
}

function handleSendMessage() {
    const text = messageInput.value.trim();
    if (!text || isProcessing) return;

    // Hide welcome screen on first message
    if (!welcomeScreen.classList.contains('hidden')) {
        welcomeScreen.classList.add('hidden');
    }

    // Display user message
    displayMessage(text, 'user');

    // Clear input
    messageInput.value = '';
    messageInput.style.height = 'auto';
    handleInputChange();

    // Show typing indicator and send to n8n
    isProcessing = true;
    showTypingIndicator();

    // Send message to backend (which forwards to n8n)
    sendMessageToN8N(text);
}

function displayMessage(text, sender) {
    const messageGroup = document.createElement('div');
    messageGroup.className = 'message-group';

    const messageHeader = document.createElement('div');
    messageHeader.className = 'message-header';

    const avatar = document.createElement('div');
    avatar.className = `message-avatar ${sender}`;
    avatar.innerHTML = sender === 'user'
        ? '<i class="fas fa-user"></i>'
        : '<i class="fas fa-wind-turbine"></i>';

    const senderName = document.createElement('div');
    senderName.className = 'message-sender';
    senderName.textContent = sender === 'user' ? 'Tú' : 'Asistente Manchego';

    messageHeader.appendChild(avatar);
    messageHeader.appendChild(senderName);

    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';

    // Simple markdown-like formatting
    const formattedText = formatMessage(text);
    messageContent.innerHTML = formattedText;

    messageGroup.appendChild(messageHeader);
    messageGroup.appendChild(messageContent);
    messagesWrapper.appendChild(messageGroup);

    // Scroll to bottom with smooth animation
    chatContainer.scrollTo({
        top: chatContainer.scrollHeight,
        behavior: 'smooth'
    });
}

function formatMessage(text) {
    // Simple formatting: code blocks, bold, etc.
    let formatted = text;

    // Code blocks with backticks
    formatted = formatted.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Line breaks
    formatted = formatted.replace(/\n/g, '<br>');

    return formatted;
}

function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = '<span></span><span></span><span></span>';
    messagesWrapper.appendChild(typingDiv);

    chatContainer.scrollTo({
        top: chatContainer.scrollHeight,
        behavior: 'smooth'
    });
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Send message to n8n via backend
async function sendMessageToN8N(message) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: message,
                sessionId: sessionId
            })
        });

        const data = await response.json();

        hideTypingIndicator();

        if (data.success && data.response) {
            // Display response from n8n
            displayMessage(data.response, 'assistant');
        } else if (data.fallback) {
            // If n8n fails, use fallback
            console.warn('Using fallback response due to n8n error:', data.error);
            displayMessage('Lo siento, estoy teniendo problemas para conectar. Por favor, intenta de nuevo en un momento.', 'assistant');
        } else {
            throw new Error('Invalid response format');
        }

    } catch (error) {
        console.error('Error sending message:', error);
        hideTypingIndicator();

        // Fallback to local simulation if backend is not available
        console.warn('Backend not available, using local simulation');
        simulateAssistantResponse(message);
    } finally {
        isProcessing = false;
        handleInputChange();
    }
}

// Fallback function for when n8n is not available
function simulateAssistantResponse(userMessage) {
    const responses = {
        mancha: [
            "Los campos de La Mancha se extienden hasta donde alcanza la vista, ondulando como olas doradas bajo el sol del mediodía.",
            "En estas tierras, el viento cuenta historias antiguas que se pierden entre los molinos y los olivares.",
            "La luz de Castilla tiene algo especial, ¿verdad? Transforma cada atardecer en un cuadro de ocres y dorados."
        ],
        noche: [
            "Las noches en La Mancha son de una claridad asombrosa. El cielo se llena de estrellas que parecen más cercanas.",
            "Cuando cae la noche sobre estos campos, el silencio se hace profundo y las estrellas brillan con una intensidad única.",
            "El cielo nocturno manchego es un espectáculo: constelaciones enteras danzan sobre los campos dormidos."
        ],
        cultura: [
            "La cultura manchega es rica y auténtica, forjada por generaciones que han trabajado estas tierras con pasión y dedicación.",
            "Desde el Quijote hasta nuestros días, La Mancha ha sido tierra de historias, de carácter fuerte y corazón noble.",
            "Nuestra tierra guarda tradiciones centenarias: el vino, el queso, las celebraciones... Todo habla de raíces profundas."
        ],
        general: [
            "¡Claro! Estoy aquí para hablar contigo sobre lo que desees. ¿Te gustaría saber algo más sobre estas tierras?",
            "Entiendo tu curiosidad. Déjame contarte más sobre la esencia de La Mancha...",
            "Es un placer poder compartir contigo la belleza de estos paisajes y su historia.",
            "Me encanta hablar sobre La Mancha. ¿Hay algo específico que te gustaría explorar?"
        ]
    };

    // Generate contextual responses based on keywords
    const lowerMessage = userMessage.toLowerCase();
    let response;

    if (lowerMessage.includes('hola') || lowerMessage.includes('buenos') || lowerMessage.includes('saludos')) {
        response = "¡Bienvenido, viajero! Es un honor tenerte aquí. En estas tierras de La Mancha, cada palabra es una historia. ¿Qué te gustaría descubrir?";
    } else if (lowerMessage.includes('campo') || lowerMessage.includes('tierra') || lowerMessage.includes('trigo')) {
        response = responses.mancha[Math.floor(Math.random() * responses.mancha.length)];
    } else if (lowerMessage.includes('noche') || lowerMessage.includes('estrella') || lowerMessage.includes('cielo')) {
        response = responses.noche[Math.floor(Math.random() * responses.noche.length)];
    } else if (lowerMessage.includes('cultura') || lowerMessage.includes('historia') || lowerMessage.includes('tradición') || lowerMessage.includes('quijote')) {
        response = responses.cultura[Math.floor(Math.random() * responses.cultura.length)];
    } else if (lowerMessage.includes('gracias') || lowerMessage.includes('thanks')) {
        response = "¡De nada, amigo! Es un placer acompañarte en este recorrido por las tierras manchegas. Si necesitas algo más, aquí estaré.";
    } else if (lowerMessage.includes('ayuda') || lowerMessage.includes('help')) {
        response = "¡Por supuesto! Puedo hablarte sobre los paisajes de La Mancha, sus tradiciones, el cielo estrellado, la cultura... ¿Qué te interesa más?";
    } else {
        response = responses.general[Math.floor(Math.random() * responses.general.length)];
    }

    displayMessage(response, 'assistant');
}

function handleNewChat() {
    // Clear messages
    messagesWrapper.innerHTML = '';

    // Show welcome screen
    welcomeScreen.classList.remove('hidden');

    // Reset input
    messageInput.value = '';
    handleInputChange();

    // Scroll to top
    chatContainer.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function toggleSidebar() {
    sidebar.classList.toggle('open');
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    }
});

// Initialize
handleInputChange();
