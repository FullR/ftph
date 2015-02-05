"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/2/activities-4-15");

var Lesson2Activity11 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="11"
                lessonScreen={require("screens/lessons/2-f")}
                namespace="lesson-2-f"
                choices={[
                    {word: "coffee"},
                    {word: "bath"},
                    {word: "cliff", correct: true}
                ]}
                word1="off"
                word2="roof"
                nextScreen={require("screens/lessons/2-m")}/>
        );
    }
});

module.exports = Lesson2Activity11;