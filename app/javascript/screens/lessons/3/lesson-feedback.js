"use strict";

var React = require("react"),
    LessonFeedback = require("screens/lesson-feedback");

var Lesson3Feedback = React.createClass({
    mixins: [
        require("mixins/storage"),
        require("mixins/lesson-storage")("lesson-3")
    ],

    // Reset last activity for lesson 1 and its sublessons
    componentWillMount: function() {
        this.merge({
            "lesson-3": {
                "last-screen": null,
                "completed": true,
                "score": this.getScore()
            }
        });
    },

    render: function() {
        return (
            <LessonFeedback
                title="Beginning and Ending Sounds"
                lessonId="3"
                section="1"
                correct={this.getScore()}
                total={this.getTotal()}
                nextScreen={require("screens/lessons/4")}
                backScreen={require("screens/lessons/3")}/>
        );
    }
});

module.exports = Lesson3Feedback;