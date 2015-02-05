"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/5/activity");

var Lesson5Activity19 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="19"
                choices={[
                    {word: "shark", correct: true},
                    {word: "sharp"},
                    {word: "park", correct: true}
                ]}
                nextScreen={require("screens/lessons/5/lesson-feedback")}/>
        );
    }
});

module.exports = Lesson5Activity19;