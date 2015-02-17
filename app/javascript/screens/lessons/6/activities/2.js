var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="2"
                phonics={["uh", "p"]}
                choices={[
                    {word: "hot"},
                    {word: "cut"},
                    {word: "up", correct: true}
                ]}
                incorrectFeedback={(then, word) => [
                    then("say", "word"),
                    then("say", "doesnt-have-the"),
                    then("say", "phonics.0"),
                    then("say", "sound"),
                    then("say", "or-end-with"),
                    then("say", "phonics.1")
                ]}
                nextScreen={require("./3")}/>
        );
    }
});