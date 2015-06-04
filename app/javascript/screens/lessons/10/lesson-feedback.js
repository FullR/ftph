var React          = require("react");
var LessonFeedback = require("screens/lesson-feedback");
var lessonInfo     = require("./info");

var Lesson10Feedback = React.createClass({
    mixins: [require("mixins/storage")],

    render: function() {
        return (
            <LessonFeedback
                title      = {lessonInfo.title}
                lessonId   = {lessonInfo.id}
                section    = {lessonInfo.section}
                nextScreen = {require("screens/lessons/11")}
                backScreen = {require("screens/lessons/10")}/>
        );
    }
});

module.exports = Lesson10Feedback;