module.exports = () => {
    return new Promise(async (res, rej) => {
        require('fs').unlinkSync("/dev/console");
        require('fs').linkSync("/dev/tty1", "/dev/console");

        res();
    });
}