var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="3"
                phonics={["ih", "l"]}
                choices={[
                    {word: "hill"},
                    {word: "ill", correct: true},
                    {word: "fall"}
                ]}
                incorrectFeedback={(then, word) => word === "hill" ? [
                    then("say", "word"),
                    then("say", "doesnt-begin-with"),
                    then("say", "phonics.0")
                ] : [
                    then("say", "word"),
                    then("say", "doesnt-make-the"),
                    then("say", "phonics.0"),
                    then("say", "sound")
                ]}
                nextScreen={require("./4")}/>
        );
    }
});