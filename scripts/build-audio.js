var _         = require("lodash"),
    Q         = require("q"),
    exec      = Q.nfbind(require("child_process").exec),
    glob      = Q.nfbind(require("glob")),
    mkdirp    = Q.nfbind(require("mkdirp")),
    rimraf    = Q.nfbind(require("rimraf")),
    chunkSize = 100,
    inDir     = "/home/james/projects/Fun-Time-Phonics-Assets/audio",
    outDir    = "/home/james/projects/Fun-Time-Phonics/statics/assets/audio";

function chunk(arr, chunkSize) {
    var chunks = [],
        length = arr.length,
        chunkCount = Math.ceil(length / chunkSize),
        startIndex,
        i;

    for(i = 0; i < chunkCount; i++) {
        startIndex = i * chunkSize;
        chunks.push(arr.slice(startIndex, startIndex + chunkSize));
    }

    return chunks;
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
    var bar = _.range(Math.floor((ratio > 1 ? 1 : ratio) * (process.stdout.columns - 4)) - 1)
        .map(function() { return "="; })
        .join("");
    process.stdout.write("\r"+Math.ceil(ratio*100)+"% "+bar);
}, 300);

// End of utility functions

// sox file.wav -C6 outfile.ogg
function buildOGG(file) {
    return exec([
        "sox", 
        "'"+file+"'", 
        "-C6", 
        "'" + replaceExt("ogg", replaceBase(inDir, outDir, file)) + "'"
    ].join(" "));
}

function buildMP3(file) {
    return exec([
        "sox", 
        "'" + file + "'", 
        "-C192", 
        "'" + replaceExt("mp3", replaceBase(inDir, outDir, file)) + "'"
    ].join(" "));
}

function convertFiles(files) {
    console.log("Converting sound files");
    var progressedIndex = 0;

    progressBar(0);
    // in order to avoid ulimit errors, I'm batching the conversions in groups of 300 or less
    return chunk(files, chunkSize).reduce(function(promise, fileChunk, index, chunks) {
        return promise
        .then(function() {
            return Q.all(fileChunk.map(function(file) {
                return Q.all([
                    buildOGG(file),
                    buildMP3(file)
                ]);
            }));
        })
        .then(function() {
            progressedIndex += fileChunk.length;
            progressBar(progressedIndex / files.length);
        });
    }, Q.resolve());
}

function buildOutputPaths(files) {
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
            .then(clean,                               errorHandler("Clean failed"))
            .then(buildOutputPaths.bind(null, sounds), errorHandler("Failed to build directory tree"))
            .then(convertFiles.bind(null, sounds),     errorHandler("Failed to convert files"));
    }, errorHandler("Failed to fetch file glob"));
}

// If this module is called on its own
if(require.main === module) {
    buildAudioAssets();
}

module.exports = buildAudioAssets;