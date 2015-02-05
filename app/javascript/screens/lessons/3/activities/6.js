"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/3/activity");

var Lesson3Activity6 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="6"
                autoplayAnimation="choices-only"
                choices={[
                    {word: "trash"},
                    {word: "desk", correct: true},
                    {word: "dish", correct: true}
                ]}
                nextScreen={require("./7")}/>
        );
    }
});

module.exports = Lesson3Activity6;