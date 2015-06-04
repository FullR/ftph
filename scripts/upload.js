/*
    Uploads compiled code to the test server for internal
    testing
*/

module.exports = function() {
    var Q    = require("q");
    var exec = Q.nfbind(require("child_process").exec);

    return exec('sshpass -p "ctADl0g1n" scp -r /home/james/projects/Fun-Time-Phonics/dist/* james@12.0.0.70:/home/james/server/apps/fun-time-phonics');
};