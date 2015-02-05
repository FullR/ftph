"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/2/activities-4-15");

var Lesson2Activity5 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="5"
                lessonScreen={require("screens/lessons/2-d")}
                namespace="lesson-2-d"
                choices={[
                    {word: "shade", correct: true},
                    {word: "dive"},
                    {word: "crab"}
                ]}
                word1="kid"
                word2="bed"
                nextScreen={require("screens/lessons/2-p")}/>
        );
    }
});

module.exports = Lesson2Activity5;