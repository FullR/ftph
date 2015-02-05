"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/5/activity");

var Lesson5Activity12 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="12"
                choices={[
                    {word: "stop", correct: true},
                    {word: "step"},
                    {word: "drop", correct: true}
                ]}
                nextScreen={require("./13")}/>
        );
    }
});

module.exports = Lesson5Activity12;