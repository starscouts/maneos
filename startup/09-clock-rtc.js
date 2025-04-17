module.exports = () => {
    return new Promise(async (res, rej) => {
        let rtc;

        for (let candidate of [
            "/dev/rtc",
            "/dev/rtc0",
            "/dev/rtc1",
            "/dev/rtc2",
            "/dev/rtc3",
            "/dev/rtc4",
            "/dev/rtc5",
            "/dev/rtc6",
            "/dev/rtc7",
            "/dev/rtc8",
            "/dev/rtc9"
        ]) {
            if (require('fs').existsSync(candidate)) {
                rtc = candidate;
                break;
            }
        }

        if (rtc) {
            require('child_process').execSync("hwclock --systz");
            require('child_process').execSync("hwclock -us");
        }

        res();
    });
}