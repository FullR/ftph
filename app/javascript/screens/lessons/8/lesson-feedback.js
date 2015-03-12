var React          = require("react"),
    LessonFeedback = require("screens/lesson-feedback"),
    lessonInfo     = require("./info");

var Lesson9Feedback = React.createClass({
    mixins: [require("mixins/storage")],

    render: function() {
        return (
            <LessonFeedback
                title      = {lessonInfo.title}
                lessonId   = {lessonInfo.id}
                section    = {lessonInfo.section}
                nextScreen = {require("screens/lessons/9")}
                backScreen = {require("screens/lessons/8")}/>
        );
    }
});

module.exports = Lesson9Feedback;