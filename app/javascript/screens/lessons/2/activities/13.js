"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/2/activities-4-15");

var Lesson2Activity13 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="13"
                lessonScreen={require("screens/lessons/2-m")}
                namespace="lesson-2-m"
                choices={[
                    {word: "chin"},
                    {word: "man"},
                    {word: "crumb", correct: true}
                ]}
                word1="ham"
                word2="gum"
                nextScreen={require("screens/lessons/2-b")}/>
        );
    }
});

module.exports = Lesson2Activity13;