"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/2/activities-4-15");

var Lesson2Activity6 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="6"
                lessonScreen={require("screens/lessons/2-p")}
                namespace="lesson-2-p"
                choices={[
                    {word: "apple"},
                    {word: "pear"},
                    {word: "grape", correct: true}
                ]}
                word1="hop"
                word2="cap"
                nextScreen={require("screens/lessons/2/activities/7")}/>
        );
    }
});

module.exports = Lesson2Activity6;