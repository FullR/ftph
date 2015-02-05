"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/1/activities-4-15");

var Lesson1Activity11 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="11"
                lessonScreen={require("screens/lessons/1-r")}
                namespace="lesson-1-r"
                choices={[
                    {word: "red", correct: true},
                    {word: "door"},
                    {word: "church"}
                ]}
                word1="rat"
                word2="rain"
                nextScreen={require("screens/lessons/1-g")}/>
        );
    }
});

module.exports = Lesson1Activity11;