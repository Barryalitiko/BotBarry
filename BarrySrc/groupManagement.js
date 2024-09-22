const { conn } = require('./index'); // Asegúrate de importar la conexión correcta

function isAdmin(userId) {
    const admins = conn.groupMetadata.participants.filter(participant => participant.isAdmin);
    return admins.includes(userId);
}

module.exports = { isAdmin };
