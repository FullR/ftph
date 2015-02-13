var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="2"
                phonics={["m", "ooh", "m"]}
                choices={[
                    {word: "mom", correct: true},
                    {word: "map"},
                    {word: "mop"}
                ]}
                incorrectFeedback={(then, word) => word === "map" ? [
                    then("say", "word"),
                    then("say", "doesnt-make"),
                    then("say", "phonics.1"),
                    then("say", "sound"),
                    then("say", "or"),
                    then("say", "doesnt-end-with"),
                    then("say", "a"),
                    then("say", "phonics.1"),
                    then("say", "sound")
                ] : [
                    then("say", "word"),
                    then("say", "doesnt-end-with"),
                    then("say", "a"),
                    then("say", "phonics.0"),
                    then("say", "sound")
                ]}
                nextScreen={require("./3")}/>
        );
    }
});