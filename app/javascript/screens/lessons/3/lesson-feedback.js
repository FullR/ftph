var React          = require("react");
var LessonFeedback = require("screens/lesson-feedback");
var lessonInfo     = require("./info");

var Lesson3Feedback = React.createClass({
    render: function() {
        return (
            <LessonFeedback
                title      = {lessonInfo.title}
                lessonId   = {lessonInfo.id}
                section    = {lessonInfo.section}
                nextScreen = {require("screens/lessons/4")}
                backScreen = {require("screens/lessons/3")}/>
        );
    }
});

module.exports = Lesson3Feedback;