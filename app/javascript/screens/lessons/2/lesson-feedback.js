var React          = require("react");
var LessonFeedback = require("screens/lesson-feedback");
var lessonInfo     = require("./info");

var Lesson2Feedback = React.createClass({
    mixins: [require("mixins/storage")],

    // Reset last activity for lesson 1 and its sublessons
    componentWillMount: function() {
        this.merge({
            "lesson-2-b": { "last-screen": null, "completed": true },
            "lesson-2-d": { "last-screen": null, "completed": true },
            "lesson-2-f": { "last-screen": null, "completed": true },
            "lesson-2-k": { "last-screen": null, "completed": true },
            "lesson-2-m": { "last-screen": null, "completed": true },
            "lesson-2-p": { "last-screen": null, "completed": true }
        });
    },

    render: function() {
        return (
            <LessonFeedback
                title      = {lessonInfo.title}
                lessonId   = {lessonInfo.id}
                section    = {lessonInfo.section}
                nextScreen = {require("screens/lessons/3")}
                backScreen = {require("screens/lessons/2")}/>
        );
    }
});

module.exports = Lesson2Feedback;