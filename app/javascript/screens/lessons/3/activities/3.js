"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/3/activity");

var Lesson3Activity3 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="3"
                autoplayAnimation="choices-only"
                choices={[
                    {word: "ring"},
                    {word: "mad", correct: true},
                    {word: "monkey", correct: true}
                ]}
                nextScreen={require("./4")}/>
        );
    }
});

module.exports = Lesson3Activity3;