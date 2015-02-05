"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/3/activity");

var Lesson3Activity14 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="14"
                autoplayAnimation="choices-only"
                ending={true}
                choices={[
                    {word: "fish"},
                    {word: "fist", correct: true},
                    {word: "fast", correct: true}
                ]}
                nextScreen={require("./15")}/>
        );
    }
});

module.exports = Lesson3Activity14;