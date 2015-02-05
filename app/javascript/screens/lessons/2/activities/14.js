"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/2/activities-4-15");

var Lesson2Activity14 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="14"
                lessonScreen={require("screens/lessons/2-b")}
                namespace="lesson-2-b"
                choices={[
                    {word: "bud"},
                    {word: "grab", correct: true},
                    {word: "map"}
                ]}
                word1="tub"
                word2="web"
                nextScreen={require("screens/lessons/2/activities/15")}/>
        );
    }
});

module.exports = Lesson2Activity14;