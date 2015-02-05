"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/3/activity");

var Lesson3Activity24 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="24"
                autoplayAnimation="choices-only"
                ending={true}
                choices={[
                    {word: "cowboy"},
                    {word: "oyster", correct: true},
                    {word: "fur", correct: true}
                ]}
                nextScreen={require("screens/lessons/3/lesson-feedback")}/>
        );
    }
});

module.exports = Lesson3Activity24;