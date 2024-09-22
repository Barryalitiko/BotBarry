// Barry's Bot Script for Baileys

const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
const path = require('path');

// Configuración inicial
const ADMIN_PHONE = '+34 624 041 420';
const COINS_FILE = 'coins.json';
const conn = new WAConnection();
let coins = loadCoins();
let userData = {};

// Cargar información de monedas
function loadCoins() {
    if (fs.existsSync(COINS_FILE)) {
        return JSON.parse(fs.readFileSync(COINS_FILE));
    }
    return {};
}

// Guardar información de monedas
function saveCoins() {
    fs.writeFileSync(COINS_FILE, JSON.stringify(coins));
}

// Guardar información del usuario en el archivo
function saveUserData() {
    const storagePath = path.join(__dirname, 'userData.json');
    fs.writeFileSync(storagePath, JSON.stringify(userData));
}

// Cargar información del usuario
function loadUserData() {
    const storagePath = path.join(__dirname, 'userData.json');
    if (fs.existsSync(storagePath)) {
        const data = fs.readFileSync(storagePath);
        userData = JSON.parse(data);
    }
}

// Mensajes personalizados
const WELCOME_MESSAGE = `
╔════════════════╗
🍄  𝙱𝙰𝚁𝚁𝚈'𝚂 𝙱𝙾𝚃 🍄
╚════════════════╝
**¡Bienvenido al grupo!**



══════════════════
`;

const ERROR_MESSAGE = ╔═══════════════════════╗ 🍄  𝙴𝚁𝚁𝙾𝚁  🍄 ╚═══════════════════════╝ **Lo siento, ha ocurrido un error.** Por favor, intenta de nuevo más tarde. ╔═══════════════════════╗ ᵇʸ: 𝙱𝚊𝚛𝚛𝚢 🍄 ╚═══════════════════════╝;

// Manejo de mensajes
conn.on(‘chat-update’, async (chatUpdate) => {
if (!chatUpdate.hasNewMessage) return;
const message = chatUpdate.messages.all()[0];
const from = message.key.remoteJid;
const user = message.participant || from;

   if (message.message.conversation) {
       const command = message.message.conversation.trim();
       handleCommand(command, user, from);
   }

});

// Funciones del bot
function handleCommand(command, user, from) {
switch (command) {
case ‘/start’:
conn.sendMessage(from, WELCOME_MESSAGE, MessageType.text);
break;
case ‘/comandos’:
conn.sendMessage(from, displayCommands(), MessageType.text);
break;
default:
conn.sendMessage(from, ERROR_MESSAGE, MessageType.text);
break;
}
}

// Muestra la lista de comandos
function displayCommands() {
return ╔════════════════╗ 🍄  𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂  🍄 ╚════════════════╝ 1. /comandos - Muestra esta lista de comandos. 2. /info - Información del bot. 3. /stiker - Convierte una imagen en un sticker. 4. /out @usuario - Expulsa a un usuario del grupo. 5. /todos - Mensaje a todos los miembros. ╔════════════════╗ ᵇʸ: 𝙱𝚊𝚛𝚛𝚢 🍄 ╚════════════════╝;
}

// Conexión a WhatsApp
conn.connect()
.then(() => {
console.log(‘Conectado a WhatsApp’);
loadUserData();  // Cargar datos del usuario al iniciar
})
.catch(err => console.error(‘Error de conexión:’, err));
