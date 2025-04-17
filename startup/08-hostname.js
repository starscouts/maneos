module.exports = () => {
    return new Promise(async (res, rej) => {
        if (require('fs').existsSync("./config/hostname")) {
            require('child_process').execFileSync("hostname", [ require('fs').readFileSync("./config/hostname").toString().trim() ]);
        } else {
            require('child_process').execFileSync("hostname", [ "localhost" ]);
        }

        res();
    });
}