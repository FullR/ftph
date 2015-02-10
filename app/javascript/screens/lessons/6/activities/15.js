var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="15"
                phonics={["ih", "nnh", "ch"]}
                choices={[
                    {word: "itch"},
                    {word: "inch", correct: true},
                    {word: "bench"}
                ]}
                incorrectFeedback={(then, word) =>
                    word === "itch" ? [
                        then("say", "word"),
                        then("say", "doesnt-end-with"),
                        then("say", "phonics.2")
                    ] : [
                        then("say", "word"),
                        then("say", "doesnt-begin-with"),
                        then("say", "phonics.0")
                    ]
                }
                nextScreen={require("screens/lessons/6/lesson-feedback")}/>
        );
    }
});