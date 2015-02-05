"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/2/activities-4-15");

var Lesson2Activity4 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="4"
                lessonScreen={require("screens/lessons/2-d")}
                namespace="lesson-2-d"
                choices={[
                    {word: "dish"},
                    {word: "radio"},
                    {word: "mad", correct: true}
                ]}
                word1="kid"
                word2="bed"
                nextScreen={require("screens/lessons/2/activities/5")}/>
        );
    }
});

module.exports = Lesson2Activity4;