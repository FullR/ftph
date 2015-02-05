"use strict";

var React = require("react"),
    LessonFeedback = require("screens/lesson-feedback");

var Lesson1Feedback = React.createClass({
    mixins: [
        require("mixins/storage"),
        require("mixins/lesson-storage")("lesson-1")
    ],

    // Reset last activity for lesson 1 and its sublessons
    componentWillMount: function() {
        this.merge({
            "lesson-1": {
                "last-screen": "feedback",
                "completed": true,
                "score": this.getScore()
            },
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
                title="Beginning Sounds"
                lessonId="1"
                section="1"
                correct={this.getScore()}
                total={this.getTotal()}
                nextScreen={require("screens/lessons/2")}
                backScreen={require("screens/lessons/1")}/>
        );
    }
});

module.exports = Lesson1Feedback;