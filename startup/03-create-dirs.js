module.exports = () => {
    return new Promise(async (res, rej) => {
        if (!require('fs').existsSync("/tmp")) require('fs').mkdirSync("/tmp");
        if (!require('fs').existsSync("/run")) require('fs').linkSync("/var/run", "/run");
        res();
    });
}