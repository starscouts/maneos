module.exports = () => {
    return new Promise(async (res, rej) => {
        require('fs').writeFileSync("/.test", "");
        require('fs').unlinkSync("/.test");
        res();
    });
}