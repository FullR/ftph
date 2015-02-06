"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="1"
                phonics={["eh", "gh"]}
                choices={[
                    {word: "box"},
                    {word: "egg", correct: true},
                    {word: "cat"}
                ]}
                incorrectFeedback={(then, word) => [ // box/cat doesn't have /eh/ or /g/ sounds
                    then("say", ["words", word === "box" ? "0" : "1"]),
                    then("say", "doesnt-have"),
                    then("say", "phonics.0"),
                    then("say", "or"),
                    then("say", "phonics.1"),
                    then("say", "sounds")
                ]}
                nextScreen={require("./2")}/>
        );
    }
});