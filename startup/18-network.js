module.exports = () => {
    return new Promise(async (res, rej) => {
        let list = require('fs').readFileSync("./config/interfaces").toString().trim().split("\n");
        let total = list.length;
        let index = 0;

        for (let iface of list) {
            //try { require('child_process').execSync("ifdown -i ./config/netconfig " + iface, { cwd: "/maneos", stdio: "ignore" }); } catch (e) {}
            //require('child_process').execSync("ifup -i ./config/netconfig " + iface, { cwd: "/maneos", stdio: "ignore" });

            index++;
            currentStepPercentage(index / total);
        }

        res();
    });
}