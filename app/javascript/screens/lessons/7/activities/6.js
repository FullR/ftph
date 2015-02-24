var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="6"
                phonics={["l", "ih", "p"]}
                choices={[
                    {word: "lip", correct: true},
                    {word: "lap"},
                    {word: "loop"}
                ]}
                incorrectFeedback={(then, word) => [
                    then("say", "word"),
                    then("say", "doesnt-make-the"),
                    then("say", "phonics.1"),
                    then("say", "sound")
                ]}
                nextScreen={require("./7")}/>
        );
    }
});
