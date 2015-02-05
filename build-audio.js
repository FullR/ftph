"use strict";

var _      = require("lodash"),
    exec   = require("child_process").exec,
    Q      = require("q"),
    glob   = Q.nfbind(require("glob")),
    mkdirp = Q.nfbind(require("mkdirp")),
    rimraf = Q.nfbind(require("rimraf")),
    inDir  = "../Fun-Time-Phonics-Assets/audio",
    outDir = "statics/assets/audio";

function run(command, options) {
    var deferred = Q.defer();
    exec(command, options || {}, function(err, stdout, stderr) {
        if(err) {
            deferred.reject(err);
        }
        else {
            deferred.resolve({
                stdout: stdout,
                stderr: stderr
            });
        }
    });
    return deferred.promise;
}

function replaceBase(oldBase, newBase, file) {
    return file.replace(oldBase, newBase);
}

function replaceExt(newExt, file) {
    var parts = file.split(".");
    parts[parts.length-1] = newExt;
    return parts.join(".");
}

function getPath(file) {
    var parts = file.split("/");
    return parts.slice(0, parts.length-1).join("/") + "/";
}

var progressBar = _.throttle(function(ratio) {
    var bar = _.range(Math.floor(ratio * (process.stdout.columns - 4))).map(function() { return "="; }).join("");
    process.stdout.write("\r"+Math.ceil(ratio*100)+"% "+bar);
}, 300);

// End of utility functions

// sox file.wav -C6 outfile.ogg
function buildOggs(files) {
    console.log("\nBuilding OGGs");
    return files.reduce(function(promise, file, index, files) {
        return promise.then(function() {
            progressBar(index/files.length);
            return run([
                "sox", 
                "'"+file+"'", 
                "-C6", 
                "'" + replaceExt("ogg", replaceBase(inDir, outDir, file)) + "'"
            ].join(" "));
        });
    }, Q.resolve());
}

// sox file.wav -C192 outfile.mp3
function buildMp3s(files) {
    console.log("\nBuilding MP3s");
    return files.reduce(function(promise, file, index, files) {
        return promise.then(function() {
            progressBar(index/files.length);
            return run([
                "sox", 
                "'"+file+"'", 
                "-C192", 
                "'" + replaceExt("mp3", replaceBase(inDir, outDir, file)) + "'"
            ].join(" "));
        });
    }, Q.resolve());
}

function buildPaths(files) {
    return Q.all(
        _.uniq(files.map(getPath))
            .map(replaceBase.bind(null, inDir, outDir))
            .map(function(path) {
                return mkdirp(path);
            })
    );
}

function clean() {
    return rimraf(outDir + "/audio");
}

function errorHandler(prefix) {
    return function(error) {
        console.log(prefix + ": " + error);
    };
}

function buildAudioAssets() {
    return glob(inDir + "/**/*.wav").then(function(sounds) {
        return Q.resolve()
            .then(clean,                         errorHandler("Clean failed"))
            .then(buildPaths.bind(null, sounds), errorHandler("Failed to build directory tree"))
            .then(buildMp3s.bind(null, sounds),  errorHandler("Failed to build MP3s"))
            .then(buildOggs.bind(null, sounds),  errorHandler("Failed to build OGGs"));
    }, errorHandler("Failed to fetch file glob"));
}

if(require.main === module) {
    buildAudioAssets();
}

module.exports = buildAudioAssets;