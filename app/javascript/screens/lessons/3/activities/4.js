"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/3/activity");

var Lesson3Activity4 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="4"
                autoplayAnimation="choices-only"
                choices={[
                    {word: "chop", correct: true},
                    {word: "itch"},
                    {word: "chin", correct: true}
                ]}
                nextScreen={require("./5")}/>
        );
    }
});

module.exports = Lesson3Activity4;