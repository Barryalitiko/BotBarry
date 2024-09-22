const fs = require('fs');
const path = require('path');

const USER_DATA_FILE = path.join(__dirname, '../Data/userData.json');

function loadUserData() {
    if (fs.existsSync(USER_DATA_FILE)) {
        return JSON.parse(fs.readFileSync(USER_DATA_FILE));
    }
    return {};
}

function saveUserData(userData) {
    fs.writeFileSync(USER_DATA_FILE, JSON.stringify(userData));
}

module.exports = { loadUserData, saveUserData };
