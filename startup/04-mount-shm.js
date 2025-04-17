module.exports = () => {
    return new Promise(async (res, rej) => {
        try { require('child_process').execSync("umount /dev/shm"); } catch (e) {}
        try { require('child_process').execSync("mount -t tmpfs shm /dev/shm"); } catch (e) {}
        res();
    });
}