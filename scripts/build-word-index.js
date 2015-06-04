/*
    Generates app/javascript/word-index.json
    which contains image/audio paths and image dimensions
*/

var Q = require("q");
var glob = Q.nfbind(require("glob"));
var fs = require("fs");
var imageSize = Q.nfbind(require("image-size"));
var writeFile = Q.nfbind(fs.writeFile);
var config = require("../config");

var audioBase = config.projectDir + "/statics/assets/audio/";
var audioExtention = ".ogg";

function logError(prefix) {
    return function(error) {
        console.log(prefix + ": " + error);
    };
}

// nfbind doesn't work on exist since the first argument of the callback is the result
function exists(filepath) {
    return Q.promise(function(resolve) {
        fs.exists(filepath, function(fileExists) {
            resolve(fileExists);
        });
    });
}

function last(arr) {
    return arr[arr.length - 1];
}

function getBasename(filename) {
    return filename.split(".")[0];
}

function getFilename(path) {
    return last(path.split("/"));
}

function getFiles() {
    return glob(config.projectDir + "/statics/assets/images/words/*.png");
}

function buildWordDesc(filepath) {
    var filename = getFilename(filepath);
    var word = getBasename(filename);
    var lessonAudioPath = "words/lesson-words/" + word;
    var activityAudioPath = "words/activity-words/" + word;
    var wordDesc = {
        word: word,
        image: {
            path: "assets/images/words/" + word + ".png"
        },
        audio: {}
    };

    return Q.all([ // check if the sound files exist
        exists(audioBase + lessonAudioPath   + audioExtention),
        exists(audioBase + activityAudioPath + audioExtention)
    ])
    .then(function(results) { // if the sound files exist, add their paths to the descriptor object
        wordDesc.audio.lesson = results[0] ? lessonAudioPath : null;
        wordDesc.audio.activity = results[1] ? activityAudioPath : null;
        return imageSize(config.projectDir +  "/statics/" + wordDesc.image.path); // get the image's dimensions
    }, logError("Failed to if check audio files exist"))
    .then(function(dimensions) { // attach dimensions to the descriptor object
        wordDesc.image.width = dimensions.width;
        wordDesc.image.height = dimensions.height;
        return wordDesc;
    }, logError("Failed to check image size"));
}

module.exports = function() {
    return getFiles()
        .then(function(wordImages) {
            return Q.all(wordImages.map(buildWordDesc));
        })
        .then(function(wordDescriptors) {
            // index descriptors by their word
            var index = wordDescriptors.reduce(function(index, wordDesc) {
                index[wordDesc.word] = wordDesc;
                return index;
            }, {});

            return writeFile(config.projectDir + "/app/javascript/word-index.json", JSON.stringify(index, null, 4));
        });
}
