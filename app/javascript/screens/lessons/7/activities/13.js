var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="13"
                phonics={["r", "uuh", "g"]}
                choices={[
                    {word: "rug", correct: true},
                    {word: "rag"},
                    {word: "wreck"}
                ]}
                incorrectFeedback={(then, word) => word === "rag" ? [
                    then("say", "word"),
                    then("say", "doesnt-make-the"),
                    then("say", "phonics.1"),
                    then("say", "sound")
                ] : [
                    then("say", "word"),
                    then("say", "doesnt-make-the"),
                    then("say", "phonics.1"),
                    then("say", "sound"),
                    then("say", "or-end-with"),
                    then("say", "phonics.2")
                ]}
                nextScreen={require("./14")}/>
        );
    }
});
