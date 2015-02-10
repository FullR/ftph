var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="13"
                phonics={["d", "uh", "kh"]}
                choices={[
                    {word: "duck", correct: true},
                    {word: "dock"},
                    {word: "deck"}
                ]}
                incorrectFeedback={(then, word) => [
                    then("say", "word"),
                    then("say", "doesnt-have"),
                    then("say", "an"),
                    then("say", "phonics.1"),
                    then("say", "sound")
                ]}
                nextScreen={require("./14")}/>
        );
    }
});