/*
    Copies source files to a temporary cache, compresses them, and sends them
    to the internal test server.
*/

var Q              = require("q"),
    exec           = Q.nfbind(require("child_process").exec),
    rimraf         = Q.nfbind(require("rimraf")),
    mkdirp         = Q.nfbind(require("mkdirp")),
    config         = require("../config"),
    cachePath      = config.projectDir + "/.backup-cache",
    compressedPath = config.projectDir + "/fun-time-phonics.tar.gz";

function logError(prefix) {
    return function(error) {
        console.log(prefix + ": " + error);
    };
}

function clean() {
    console.log("Removing cache");
    return rimraf(cachePath)
        .then(function() {
            return rimraf(compressedPath);
        }, logError("Error while removing cache"))
        .catch(logError("Error while removing compressed cache"));
}

function compressCache() {
    console.log("Compressing cache");
    return exec(["tar", "-zcvf", "'"+compressedPath+"'", "'"+cachePath+"'"].join(" "), {maxBuffer: Infinity})
        .catch(logError("Error while compressing cache"))
}

function cacheFile(filename) {
    var inPath = config.projectDir + "/" + filename;
    console.log("Caching: " + filename);
    return exec(["cp", "-R", inPath, cachePath].join(" "))
        .catch(logError("Error while caching file ("+filename+")"));
}

function upload() {
    console.log("Uploading");
    return exec(["sshpass", "-p", "'ctADl0g1n'", "scp", "'"+compressedPath+"'", "james@12.0.0.70:/home/james/server/backups/"].join(" "))
        .catch(logError("Error while uploading"));
}

function cacheFiles() {
    return Q.all([
        "app",
        "cordova-merge",
        "documents",
        "scripts",
        ".gitignore",
        ".jshintrc",
        "README.md",
        "config.json",
        "current-edits.docx",
        "gulpfile.js",
        "package.json",
        "../Fun-Time-Phonics-Assets"
    ].map(cacheFile));
}

module.exports = function() {
    return mkdirp(cachePath)
        .then(cacheFiles)
        .then(compressCache)
        .then(upload)
        .then(clean);
};