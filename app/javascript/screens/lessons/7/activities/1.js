var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="1"
                phonics={["k", "ah", "t"]}
                choices={[
                    {word: "cop"},
                    {word: "cut"},
                    {word: "cat", correct: true}
                ]}
                incorrectFeedback={(then, word) => word === "cop" ? [
                    then("say", "word"),
                    then("say", "doesnt-make-the"),
                    then("say", "phonics.1"),
                    then("say", "sound"),
                    then("say", "or-end-with"),
                    then("say", "phonics.2")
                ] : [
                    then("say", "word"),
                    then("say", "doesnt-make-the"),
                    then("say", "phonics.1"),
                    then("say", "sound")
                ]}
                nextScreen={require("./2")}/>
        );
    }
});