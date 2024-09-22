const { WELCOME_MESSAGE, ERROR_MESSAGE } = require('./messages');
const { loadCoins, saveCoins } = require('./coins');
const { handlePrivateChat } = require('./privateChat');
const { isAdmin } = require('./groupManagement');

function handleCommand(command, user, from, conn) {
    switch (command) {
        case '/start':
            conn.sendMessage(from, WELCOME_MESSAGE, MessageType.text);
            break;
        case '/comandos':
            conn.sendMessage(from, displayCommands(), MessageType.text);
            break;
        case '/save':
            // Lógica para el comando /save
            break;
        default:
            conn.sendMessage(from, ERROR_MESSAGE, MessageType.text);
            break;
    }
}

function displayCommands() {
    return `
╔════════════════╗
🍄  𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂  🍄
╚════════════════╝
1. /comandos - Muestra esta lista de comandos.
2. /info - Información del bot.
3. /stiker - Convierte una imagen en un sticker.
4. /out @usuario - Expulsa a un usuario del grupo.
5. /todos - Mensaje a todos los miembros.
6. /save - Guarda la foto o video en privado.
╔════════════════╗
ᵇʸ: 𝙱𝚊𝚛𝚛𝚢 🍄
╚════════════════╝
`;
}

module.exports = { handleCommand };
