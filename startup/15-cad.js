module.exports = () => {
    return new Promise(async (res, rej) => {
        require('child_process').execSync("/maneos/utilities/cad-handler");

        res();
    });
}