module.exports = () => {
    return new Promise(async (res, rej) => {
        let keymap = 'us';

        if (require('fs').existsSync("./config/keymap") && require('fs').existsSync("/etc/keymap/" + require('fs').readFileSync("./config/keymap").toString().trim() + ".bmap.gz")) {
            keymap = require('fs').readFileSync("./config/keymap").toString().trim();
        }

        require('child_process').execSync("zcat /etc/keymap/" + keymap + ".bmap.gz | loadkmap");

        res();
    });
}