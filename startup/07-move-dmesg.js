module.exports = () => {
    return new Promise(async (res, rej) => {
        if (require('fs').existsSync("/var/log/dmesg")) {
            require('fs').renameSync("/var/log/dmesg", "/var/log/dmesg.old");
        }

        require('fs').writeFileSync("/var/log/dmesg", require('child_process').execSync("dmesg"));
        require('fs').chmodSync("/var/log/dmesg", 640);

        res();
    });
}