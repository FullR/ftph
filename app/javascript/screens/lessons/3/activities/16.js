"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/3/activity");

var Lesson3Activity16 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="16"
                autoplayAnimation="choices-only"
                ending={true}
                choices={[
                    {word: "itch"},
                    {word: "dish", correct: true},
                    {word: "trash", correct: true}
                ]}
                nextScreen={require("./17")}/>
        );
    }
});

module.exports = Lesson3Activity16;