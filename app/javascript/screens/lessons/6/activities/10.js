"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="10"
                phonics={["t", "oh", "p"]}
                choices={[
                    {word: "tape"},
                    {word: "tub"},
                    {word: "top", correct: true}
                ]}
                incorrectFeedback={(then, word) => [
                    then("say", "word"),
                    then("say", "doesnt-have"),
                    then("say", "an"),
                    then("say", "phonics.1"),
                    then("say", "sound"),
                    word === "tub" ? [
                        then("say", "and"),
                        then("say", "doesnt-end-with"),
                        then("say", "phonics.2")
                    ] : null
                ]}
                nextScreen={require("./11")}/>
        );
    }
});