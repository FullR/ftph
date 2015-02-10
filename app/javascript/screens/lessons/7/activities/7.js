var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="7"
                phonics={["f", "aah", "t"]}
                choices={[
                    {word: "fist"},
                    {word: "fan"},
                    {word: "fat", correct: true}
                ]}
                incorrectFeedback={(then, word) => word === "fist" ? [
                    then("say", "word"),
                    then("say", "doesnt-make"),
                    then("say", "an"),
                    then("say", "phonics.1"),
                    then("say", "sound")
                ] : [
                    then("say", "word"),
                    then("say", "doesnt-end-with"),
                    then("say", "phonics.2")
                ]}
                nextScreen={require("./8")}/>
        );
    }
});
