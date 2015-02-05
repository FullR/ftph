"use strict";

var React = require("react"),
    LessonFeedback = require("screens/lesson-feedback");

var Lesson4Feedback = React.createClass({
    mixins: [
        require("mixins/storage"),
        require("mixins/lesson-storage")("lesson-5")
    ],

    // Reset last activity for lesson 1 and its sublessons
    componentWillMount: function() {
        this.merge({
            "lesson-5": {
                "last-screen": null,
                "completed": true,
                "score": this.getScore()
            }
        });
    },

    render: function() {
        return (
            <LessonFeedback
                title="Rhyme Time"
                lessonId="5"
                section="1"
                correct={this.getScore()}
                total={this.getTotal()}
                nextScreen={require("screens/lessons/6")}
                backScreen={require("screens/lessons/5")}/>
        );
    }
});

module.exports = Lesson4Feedback;