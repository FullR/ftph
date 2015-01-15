"use strict";

var _      = require("lodash"),
    exec   = require("child_process").exec,
    Q      = require("q"),
    glob   = Q.nfbind(require("glob")),
    mkdirp = Q.nfbind(require("mkdirp")),
    rimraf = Q.nfbind(require("rimraf")),
    inDir  = "raw-assets/audio",
    outDir = "statics/assets";

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

function replaceBase(newBase, file) {
    var parts = file.split("/");
    parts[0] = newBase;
    return parts.join("/");
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
                "'" + replaceExt("ogg", replaceBase(outDir, file)) + "'"
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
                "'" + replaceExt("mp3", replaceBase(outDir, file)) + "'"
            ].join(" "));
        });
    }, Q.resolve());
}

function buildPaths(files) {
    return Q.all(
        _.uniq(files.map(getPath))
            .map(replaceBase.bind(null, outDir))
            .map(function(path) {
                return mkdirp(path);
            })
    );
}

function clean() {
    return rimraf(outDir + "/audio");
}

function buildAudioAssets() {
    return glob(inDir + "/**/*.wav").then(function(sounds) {
        function logErrors(error) {
            console.log(error);
        }

        Q.resolve()
            .then(clean)
            .then(buildPaths.bind(null, sounds))
            .then(buildMp3s.bind(null, sounds))
            .then(buildOggs.bind(null, sounds))
            .then(null, logErrors);
    });
}

if(require.main === module) {
    buildAudioAssets();
}

module.exports = buildAudioAssets;