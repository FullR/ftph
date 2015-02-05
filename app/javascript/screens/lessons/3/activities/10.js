"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/3/activity");

var Lesson3Activity10 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="10"
                autoplayAnimation="choices-only"
                choices={[
                    {word: "moth"},
                    {word: "thumb", correct: true},
                    {word: "thorn", correct: true}
                ]}
                nextScreen={require("./11")}/>
        );
    }
});

module.exports = Lesson3Activity10;