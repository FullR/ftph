"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/3/activity");

var Lesson3Activity15 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="15"
                autoplayAnimation="choices-only"
                ending={true}
                choices={[
                    {word: "man"},
                    {word: "mom", correct: true},
                    {word: "jam", correct: true}
                ]}
                nextScreen={require("./16")}/>
        );
    }
});

module.exports = Lesson3Activity15;