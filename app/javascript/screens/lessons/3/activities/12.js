"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/3/activity");

var Lesson3Activity12 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="12"
                autoplayAnimation="choices-only"
                choices={[
                    {word: "trick", correct: true},
                    {word: "drink"},
                    {word: "table", correct: true}
                ]}
                nextScreen={require("./13")}/>
        );
    }
});

module.exports = Lesson3Activity12;