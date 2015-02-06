"use strict";

var React          = require("react"),
    LessonFeedback = require("screens/lesson-feedback"),
    lessonInfo     = require("./info");

var Lesson4Feedback = React.createClass({
    mixins: [
        require("mixins/storage"),
        require("mixins/lesson-storage")(lessonInfo.namespace)
    ],

    // Reset last activity for lesson 1 and its sublessons
    componentWillMount: function() {
        var toMerge = {};
        toMerge[lessonInfo.namespace] = {
            "last-screen": null,
            "completed":   true,
            "score":       this.getScore()
        };

        this.merge(toMerge);
    },

    render: function() {
        return (
            <LessonFeedback
                title      = {lessonInfo.title}
                lessonId   = {lessonInfo.id}
                section    = {lessonInfo.section}
                correct    = {this.getScore()}
                total      = {this.getTotal()}
                nextScreen = {require("screens/lessons/5")}
                backScreen = {require("screens/lessons/4")}/>
        );
    }
});

module.exports = Lesson4Feedback;