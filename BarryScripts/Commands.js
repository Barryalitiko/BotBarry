const { MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
const path = require('path');

const COINS_FILE = path.join(__dirname, '../Data/coins.json');
let coins = loadCoins();

function loadCoins() {
    if (fs.existsSync(COINS_FILE)) {
        return JSON.parse(fs.readFileSync(COINS_FILE));
    }
    return {};
}

function saveCoins() {
    fs.writeFileSync(COINS_FILE, JSON.stringify(coins));
}

function handleCommands(command, user, from, conn) {
    switch (command) {
        case '/start':
            conn.sendMessage(from, '¡Bienvenido al bot!', MessageType.text);
            break;
        case '/comandos':
            conn.sendMessage(from, displayCommands(), MessageType.text);
            break;
        case '/save':
            saveCommand(user, from, conn);
            break;
        // Otros comandos
        default:
            conn.sendMessage(from, 'Comando no reconocido.', MessageType.text);
            break;
    }
}

function displayCommands() {
    return `
1. /start - Inicia el bot.
2. /comandos - Muestra esta lista de comandos.
3. /save - Guarda un archivo para admins.
`;
}

async function saveCommand(user, from, conn) {
    // Lógica para guardar archivos
    const userCoins = coins[user] || 0;
    if (userCoins >= 1200) {
        // Resta monedas y envía archivo
        coins[user] -= 1200;
        saveCoins();
        // Envía archivo al privado
        conn.sendMessage(user, 'Archivo guardado con éxito.', MessageType.text);
    } else {
        conn.sendMessage(from, 'No tienes suficientes monedas.', MessageType.text);
    }
}

module.exports = { handleCommands };
