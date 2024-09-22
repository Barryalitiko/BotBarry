// Log.js
const fs = require('fs');
const path = require('path');

// Ruta del archivo de log
const LOG_FILE = path.join(__dirname, '../Log/botLog.txt');

// Función para guardar mensajes de log
function logMessage(message) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}\n`;
    fs.appendFileSync(LOG_FILE, logEntry);
}

// Exportar la función para que pueda ser utilizada en otros módulos
module.exports = { logMessage };
