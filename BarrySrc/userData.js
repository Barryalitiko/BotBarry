const fs = require('fs');
const path = require('path');
const storagePath = path.join(__dirname, 'userData.json');
let userData = {};

function loadUserData() {
    if (fs.existsSync(storagePath)) {
        const data = fs.readFileSync(storagePath);
        userData = JSON.parse(data);
    }
}

function saveUserData() {
    fs.writeFileSync(storagePath, JSON.stringify(userData));
}

module.exports = { loadUserData, saveUserData, userData };
