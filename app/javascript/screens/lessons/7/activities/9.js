var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="9"
                phonics={["r", "eeh", "d"]}
                choices={[
                    {word: "road"},
                    {word: "bread"},
                    {word: "red", correct: true}
                ]}
                feedbackSounds={{
                    "b": "phonics/activity-phonics/b"
                }}
                incorrectFeedback={(then, word) => word === "road" ? [
                    then("say", "word"),
                    then("say", "doesnt-make"),
                    then("say", "an"),
                    then("say", "phonics.1"),
                    then("say", "sound")
                ] : [
                    then("say", "word"),
                    then("say", "begins-with"),
                    then("say", "b")
                ]}
                nextScreen={require("./10")}/>
        );
    }
});
