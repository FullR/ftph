"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="5"
                phonics={["oh", "cks"]}
                choices={[
                    {word: "on"},
                    {word: "off"},
                    {word: "ox", correct: true}
                ]}
                incorrectFeedback={(then, word) => [
                    then("say", "word"),
                    then("say", "doesnt-have"),
                    then("say", "a"),
                    then("say", "phonics.1"),
                    then("say", "sound")
                ]}
                nextScreen={require("./6")}/>
        );
    }
});