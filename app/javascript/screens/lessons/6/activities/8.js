"use strict";

var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="8"
                phonics={["s", "ih", "t"]}
                choices={[
                    {word: "sick"},
                    {word: "sit", correct: true},
                    {word: "stick"}
                ]}
                incorrectFeedback={(then, word) => [
                    then("say", "word"),
                    then("say", "doesnt-end-with"),
                    then("say", "phonics.2")
                ]}
                nextScreen={require("./9")}/>
        );
    }
});