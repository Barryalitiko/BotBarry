const { WAConnection } = require('@adiwajshing/baileys');
const { handleCommands } = require('./commands');

const conn = new WAConnection();

conn.on('chat-update', async (chatUpdate) => {
    if (!chatUpdate.hasNewMessage) return;
    const message = chatUpdate.messages.all()[0];
    const from = message.key.remoteJid;
    const user = message.participant || from;

    if (message.message.conversation) {
        const command = message.message.conversation.trim();
        handleCommands(command, user, from, conn);
    }
});

conn.connect()
    .then(() => console.log('Conectado a WhatsApp'))
    .catch(err => console.error('Error de conexión:', err));
