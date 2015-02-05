"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/1/activities-4-15");

var Lesson1Activity9 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="9"
                lessonScreen={require("screens/lessons/1-n")}
                namespace="lesson-1-n"
                choices={[
                    {word: "hand"},
                    {word: "net", correct: true},
                    {word: "bun"}
                ]}
                word1="nap"
                word2="neck"
                nextScreen={require("screens/lessons/1-r")}/>
        );
    }
});

module.exports = Lesson1Activity9;