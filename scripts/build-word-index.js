var glob = require("glob"),
    fs   = require("fs");

function tail(arr) { return arr[arr.length - 1]; }
function getBasename(filename) {
    return filename.split(".")[0];
}

function getFilename(path) {
    return tail(path.split("/"));
}

glob(__dirname + "/../statics/assets/images/words/*.png", function(error, files) {
    var audioBase      = __dirname + "/../statics/assets/audio/",
        audioExtention = ".ogg";

    var wordIndex = files.reduce(function(index, path) {
        var filename          = getFilename(path),
            word              = getBasename(filename),
            lessonAudioPath   = "words/lesson-words/"   + word,
            activityAudioPath = "words/activity-words/" + word;

        index[word] = {
            word:              word,
            imagePath:         "assets/images/words/" + word + ".png",
            lessonAudioPath:   fs.existsSync(audioBase + lessonAudioPath   + audioExtention) ? lessonAudioPath   : null,
            activityAudioPath: fs.existsSync(audioBase + activityAudioPath + audioExtention) ? activityAudioPath : null
        };

        return index;
    }, {});

    fs.writeFileSync(__dirname+"/../app/javascript/word-index.json", JSON.stringify(wordIndex, null, 4));
});