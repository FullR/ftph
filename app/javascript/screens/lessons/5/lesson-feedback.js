var React          = require("react");
var LessonFeedback = require("screens/lesson-feedback");
var lessonInfo     = require("./info");

var Lesson4Feedback = React.createClass({
    render: function() {
        return (
            <LessonFeedback
                title      = {lessonInfo.title}
                lessonId   = {lessonInfo.id}
                section    = {lessonInfo.section}
                nextScreen = {require("screens/lessons/6")}
                backScreen = {require("screens/lessons/5")}/>
        );
    }
});

module.exports = Lesson4Feedback;