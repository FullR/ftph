var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="1"
                phonics={["c", "aah", "t"]}
                choices={[
                    {word: "cop"},
                    {word: "cut"},
                    {word: "cat", correct: true}
                ]}
                incorrectFeedback={(then, word) => word === "cop" ? [
                    then("say", "word"),
                    then("say", "doesnt-make"),
                    then("say", "an"),
                    then("say", "phonics.1"),
                    then("say", "sound"),
                    then("say", "or"),
                    then("say", "end-with-a"),
                    then("say", "phonics.2"),
                    then("say", "sound")
                ] : [
                    then("say", "word"),
                    then("say", "doesnt-make"),
                    then("say", "an"),
                    then("say", "phonics.1"),
                    then("say", "sound")
                ]}
                nextScreen={require("./2")}/>
        );
    }
});