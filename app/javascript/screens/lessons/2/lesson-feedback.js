"use strict";

var React          = require("react"),
    LessonFeedback = require("screens/lesson-feedback"),
    lessonInfo     = require("./info");

var Lesson2Feedback = React.createClass({
    mixins: [
        require("mixins/storage"),
        require("mixins/lesson-storage")(lessonInfo.namespace)
    ],

    // Reset last activity for lesson 1 and its sublessons
    componentWillMount: function() {
        this.merge({
            "lesson-2": {
                "last-screen": null,
                "completed":   true,
                "score":       this.getScore()
            },
            "lesson-2-b": { "last-screen": null },
            "lesson-2-d": { "last-screen": null },
            "lesson-2-f": { "last-screen": null },
            "lesson-2-k": { "last-screen": null },
            "lesson-2-m": { "last-screen": null },
            "lesson-2-p": { "last-screen": null }
        });
    },

    render: function() {
        return (
            <LessonFeedback
                title      = {lessonInfo.title}
                lessonId   = {lessonInfo.id}
                section    = {lessonInfo.section}
                correct    = {this.getScore()}
                total      = {this.getTotal()}
                nextScreen = {require("screens/lessons/3")}
                backScreen = {require("screens/lessons/2")}/>
        );
    }
});

module.exports = Lesson2Feedback;