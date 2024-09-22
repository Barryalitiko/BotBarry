const fs = require('fs');
const COINS_FILE = 'coins.json';

function loadCoins() {
    if (fs.existsSync(COINS_FILE)) {
        return JSON.parse(fs.readFileSync(COINS_FILE));
    }
    return {};
}

function saveCoins(coins) {
    fs.writeFileSync(COINS_FILE, JSON.stringify(coins));
}

module.exports = { loadCoins, saveCoins };
