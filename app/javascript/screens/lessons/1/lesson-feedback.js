var React          = require("react"),
    LessonFeedback = require("screens/lesson-feedback"),
    lessonInfo     = require("./info");

var Lesson1Feedback = React.createClass({
    mixins: [require("mixins/storage")],

    // Reset last activity for lesson 1 and its sublessons
    componentWillMount: function() {
        this.merge({
            "lesson-1-g": { "last-screen": null },
            "lesson-1-l": { "last-screen": null },
            "lesson-1-m": { "last-screen": null },
            "lesson-1-n": { "last-screen": null },
            "lesson-1-r": { "last-screen": null },
            "lesson-1-s": { "last-screen": null }
        });
    },

    render: function() {
        return (
            <LessonFeedback
                title      = {lessonInfo.title}
                lessonId   = {lessonInfo.id}
                section    = {lessonInfo.section}
                nextScreen = {require("screens/lessons/2")}
                backScreen = {require("screens/lessons/1")}/>
        );
    }
});

module.exports = Lesson1Feedback;