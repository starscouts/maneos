module.exports = () => {
    return new Promise(async (res, rej) => {
        require('child_process').execSync("dd if=/dev/random of=/dev/null count=2048 bs=32K", { stdio: "ignore" });

        res();
    });
}