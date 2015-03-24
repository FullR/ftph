var React          = require("react"),
    LessonFeedback = require("screens/lesson-feedback"),
    lessonInfo     = require("./info");

var Lesson10Feedback = React.createClass({
    mixins: [require("mixins/storage")],

    render: function() {
        return (
            <LessonFeedback
                title      = {lessonInfo.title}
                lessonId   = {lessonInfo.id}
                section    = {lessonInfo.section}
                nextScreen = {require("screens/lessons/13")}
                backScreen = {require("screens/lessons/12")}/>
        );
    }
});

module.exports = Lesson10Feedback;