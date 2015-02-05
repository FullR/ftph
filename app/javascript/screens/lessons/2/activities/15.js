"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/2/activities-4-15");

var Lesson2Activity15 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="15"
                lessonScreen={require("screens/lessons/2-b")}
                namespace="lesson-2-b"
                choices={[
                    {word: "trap"},
                    {word: "globe", correct: true},
                    {word: "boxer"}
                ]}
                word1="tub"
                word2="web"
                nextScreen={require("screens/lessons/2/lesson-feedback")}/>
        );
    }
});

module.exports = Lesson2Activity15;