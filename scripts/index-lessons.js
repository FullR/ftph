/*
    Generates lesson/activity/feedback indexes. This enables dynamic lookups
    of components based on ids.

    Generates these files:
        app/javascript/screens/lessons/lessons.js,
        app/javascript/screens/lessons/activity-index.js,
        app/javascript/screens/lessons/feedback-index.js
*/

var Q         = require("q"),
    writeFile = Q.nfbind(require("fs").writeFile),
    glob      = Q.nfbind(require("glob")),
    header    = '/* This file is automatically generated by gulpfile.js task "index-lessons" */\n';

function tail(arr) {
    return arr[arr.length - 1];
}

function wrapInObject(pairStrings) {
    return [
        header,
        'module.exports = {', 
            '    ' +
            pairStrings.join(",\n    "),
        "};"
    ].join("\n");
}

module.exports = function generateLessonIndexes() {
    return glob("screens/lessons/*", {cwd: __dirname + "/../app/javascript"}).then(function(files) {
        var lessonJSON,
            activityJSON,
            feedbackJSON,
            indexes;

        files = files.filter(function isntJS(file) { // Exclude javascript files (we just want directories)
            return file.slice(-3) !== ".js"; 
        });

        lessonJSON = wrapInObject(files
            .map(function(file) {
                var lessonId = tail(file.split("/"));
                return ['"', lessonId, '": ', 'require("',file,'")'].join("");
            }));

        activityJSON = wrapInObject(files
            .map(function(file) {
                var lessonId = tail(file.split("/"));
                return ['"', lessonId, '": ', 'require("',file,'/activities")'].join("");
            }));

        feedbackJSON = wrapInObject(files
            .filter(function(file) { // filter out sublessons
                return file.indexOf("-") === -1;
            })
            .map(function(file) {
                var lessonId = tail(file.split("/"));
                return ['"', lessonId, '": ', 'require("',file,'/lesson-feedback")'].join("");
            }));

        return Q.all([
            writeFile(__dirname + "/../app/javascript/screens/lessons/lessons.js", lessonJSON),
            writeFile(__dirname + "/../app/javascript/screens/lessons/activity-index.js", activityJSON),
            writeFile(__dirname + "/../app/javascript/screens/lessons/feedback-index.js", feedbackJSON)
        ]);
    });
}