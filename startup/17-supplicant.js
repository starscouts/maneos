module.exports = () => {
    return new Promise(async (res, rej) => {
        if (!require('fs').existsSync("/run/wpa_supplicant")) require('fs').mkdirSync("/run/wpa_supplicant");
        //require('child_process').execFileSync("wpa_supplicant", [ "-B", "-Dwext", "-i", require('fs').readFileSync("./config/wifi"), "-c/maneos/config/supplicant" ]);

        res();
    });
}