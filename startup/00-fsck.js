const si = require('systeminformation');

module.exports = () => {
    return new Promise(async (res, rej) => {
        let list = (await si.blockDevices()).filter(i => i.type === "part");
        let total = list.length;
        let index = 0;

        for (let block of list) {
            if (block.fsType === "vfat") {
                try {
                    require('child_process').execSync("fsck.fat -a /dev/" + block.name, { stdio: "ignore" });
                } catch (e) {}
            } else if (block.fsType === "ext4") {
                try {
                    require('child_process').execSync("fsck.ext4 -y /dev/" + block.name, { stdio: "ignore" });
                } catch (e) {}
            }

            index++;
            currentStepPercentage(index / total);
        }
        res();
    });
}