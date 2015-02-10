var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="15"
                phonics={["ch", "ooh", "p"]}
                choices={[
                    {word: "chop", correct: true},
                    {word: "chip"},
                    {word: "shop"}
                ]}
                incorrectFeedback={(then, word) => word === "chip" ? [
                    then("say", "word"),
                    then("say", "doesnt-make"),
                    then("say", "an"),
                    then("say", "phonics.1"),
                    then("say", "sound")
                ] : [
                    then("say", "word"),
                    then("say", "doesnt-begin-with"),
                    then("say", "phonics.0")
                ]}
                nextScreen={require("screens/lessons/7/lesson-feedback")}/>
        );
    }
});
