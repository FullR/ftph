"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/3/activity");

var Lesson3Activity7 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="7"
                autoplayAnimation="choices-only"
                choices={[
                    {word: "pot", correct: true},
                    {word: "pig", correct: true},
                    {word: "top"}
                ]}
                nextScreen={require("./8")}/>
        );
    }
});

module.exports = Lesson3Activity7;