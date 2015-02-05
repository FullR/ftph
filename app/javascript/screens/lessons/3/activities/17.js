"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/3/activity");

var Lesson3Activity17 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="17"
                autoplayAnimation="choices-only"
                ending={true}
                choices={[
                    {word: "sleep", correct: true},
                    {word: "sheep", correct: true},
                    {word: "sheet"}
                ]}
                nextScreen={require("./18")}/>
        );
    }
});

module.exports = Lesson3Activity17;