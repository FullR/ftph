var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="14"
                phonics={["sh", "oh", "p"]}
                choices={[
                    {word: "chop"},
                    {word: "ship"},
                    {word: "shop", correct: true}
                ]}
                incorrectFeedback={(then, word) =>
                    word === "chop" ? [
                        then("say", "word"),
                        then("say", "doesnt-begin-with"),
                        then("say", "phonics.0")
                    ] : [
                        then("say", "word"),
                        then("say", "doesnt-have"),
                        then("say", "an"),
                        then("say", "phonics.1"),
                        then("say", "sound")
                    ]
                }
                nextScreen={require("./15")}/>
        );
    }
});