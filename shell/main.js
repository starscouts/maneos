if (!require('fs').existsSync("/run/maneos")) require('fs').mkdirSync("/run/maneos");
require('fs').writeFileSync("/run/maneos/shell_pid", process.pid.toString());

const chalk = require('chalk');

console.clear();
console.log("halo");