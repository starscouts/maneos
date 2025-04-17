module.exports = () => {
    return new Promise(async (res, rej) => {
        let services = require('child_process').spawn("node", [ "main.js" ], { cwd: "/maneos/services" });

        if (!require('fs').existsSync("/run/maneos")) require('fs').mkdirSync("/run/maneos");
        require('fs').writeFileSync("/run/maneos/manager_pid", services.pid.toString());
        require('fs').writeFileSync("/run/maneos/init_pid", process.pid.toString());

        require('child_process').execSync("sysctl kernel.cad_pid=" + services.pid);

        res();
    });
}