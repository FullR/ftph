"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/3/activity");

var Lesson3Activity21 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="21"
                autoplayAnimation="choices-only"
                ending={true}
                choices={[
                    {word: "blue", correct: true},
                    {word: "shoe", correct: true},
                    {word: "boot"}
                ]}
                nextScreen={require("./22")}/>
        );
    }
});

module.exports = Lesson3Activity21;