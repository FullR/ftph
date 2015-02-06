"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="11"
                phonics={["r", "eh", "d"]}
                choices={[
                    {word: "road"},
                    {word: "red", correct: true},
                    {word: "wrench"}
                ]}
                incorrectFeedback={(then, word) => 
                    word === "road" ? [
                        then("say", "word"),
                        then("say", "doesnt-have"),
                        then("say", "an"),
                        then("say", "phonics.1"),
                        then("say", "sound")
                    ] : [
                        then("say", "word"),
                        then("say", "doesnt-end-with"),
                        then("say", "phonics.2")
                    ]
                }
                nextScreen={require("./12")}/>
        );
    }
});