"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/3/activity");

var Lesson3Activity22 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="22"
                autoplayAnimation="choices-only"
                ending={true}
                choices={[
                    {word: "snow", correct: true},
                    {word: "boat"},
                    {word: "piano", correct: true}
                ]}
                nextScreen={require("./23")}/>
        );
    }
});

module.exports = Lesson3Activity22;