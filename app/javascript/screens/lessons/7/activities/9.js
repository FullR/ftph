var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="9"
                phonics={["r", "eh", "d"]}
                choices={[
                    {word: "road"},
                    {word: "bread"},
                    {word: "red", correct: true}
                ]}
                incorrectFeedback={(then, word) => word === "road" ? [
                    then("say", "word"),
                    then("say", "doesnt-make-the"),
                    then("say", "phonics.1"),
                    then("say", "sound")
                ] : [
                    then("say", "word"),
                    then("say", "doesnt-begin-with"),
                    then("say", "phonics.0")
                ]}
                nextScreen={require("./10")}/>
        );
    }
});
