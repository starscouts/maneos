process.on('uncaughtException', (e) => {
    require('fs').writeFileSync("/run/maneos/manager_crash.log", e.stack);
    process.exit(2);
});

process.on('SIGINT', () => {
    process.kill(parseInt(require('fs').readFileSync("/run/maneos/shell_pid").toString()), "SIGKILL");
    process.kill(parseInt(require('fs').readFileSync("/run/maneos/init_pid").toString()), "SIGUSR2");
});

setInterval(() => {});