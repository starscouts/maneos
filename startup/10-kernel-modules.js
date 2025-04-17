module.exports = () => {
    return new Promise(async (res, rej) => {
        let list = ["ipv6", "af_packet"];
        let total = list.length;
        let index = 0;

        for (let item of list) {
            require('child_process').execSync("modprobe " + item);

            index++;
            currentStepPercentage(index / total);
        }

        res();
    });
}