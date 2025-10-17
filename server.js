const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from root

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend is running' });
});

// Send message to n8n and get response
app.post('/api/chat', async (req, res) => {
    try {
        const { message, sessionId } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Validate n8n webhook URL
        if (!process.env.N8N_WEBHOOK_URL) {
            return res.status(500).json({ error: 'N8N_WEBHOOK_URL not configured' });
        }

        console.log(`[${new Date().toISOString()}] Sending message to n8n:`, message);

        // Send message to n8n webhook
        const n8nResponse = await axios.post(process.env.N8N_WEBHOOK_URL, {
            message: message,
            sessionId: sessionId || 'default-session',
            timestamp: new Date().toISOString()
        }, {
            timeout: 30000, // 30 seconds timeout
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(`[${new Date().toISOString()}] Response from n8n received`);

        // Return n8n response
        res.json({
            success: true,
            response: n8nResponse.data.response || n8nResponse.data.message || n8nResponse.data,
            sessionId: sessionId || 'default-session'
        });

    } catch (error) {
        console.error('Error communicating with n8n:', error.message);

        // Handle different error types
        if (error.code === 'ECONNABORTED') {
            return res.status(504).json({
                error: 'Request timeout. n8n took too long to respond.',
                fallback: true
            });
        }

        if (error.response) {
            return res.status(error.response.status).json({
                error: 'n8n returned an error',
                details: error.response.data,
                fallback: true
            });
        }

        res.status(500).json({
            error: 'Failed to communicate with n8n',
            message: error.message,
            fallback: true
        });
    }
});

// Optional: Webhook endpoint for n8n to send messages back (for async responses)
app.post('/api/webhook/response', (req, res) => {
    try {
        const { sessionId, message } = req.body;

        console.log(`[${new Date().toISOString()}] Webhook response received:`, {
            sessionId,
            message
        });

        // Here you could implement WebSocket or Server-Sent Events
        // to push messages to connected clients

        res.json({ success: true, received: true });
    } catch (error) {
        console.error('Error processing webhook:', error);
        res.status(500).json({ error: 'Failed to process webhook' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📡 Chat API available at http://localhost:${PORT}/api/chat`);
    console.log(`🔗 n8n webhook URL: ${process.env.N8N_WEBHOOK_URL || 'NOT CONFIGURED'}`);
});
