module.exports = () => {
    return new Promise(async (res, rej) => {
        require('child_process').execSync("swapon -a");

        res();
    });
}