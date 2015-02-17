var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="1"
                phonics={["eh", "g"]}
                choices={[
                    {word: "box"},
                    {word: "egg", correct: true},
                    {word: "cat"}
                ]}
                incorrectFeedback={(then, word) => [ // box/cat doesn't have /eh/ or /g/ sounds
                    then("say", "word"),
                    then("say", "doesnt-have-the"),
                    then("say", "phonics.0"),
                    then("say", "sound"),
                    then("say", "or-end-with"),
                    then("say", "phonics.1")
                ]}
                nextScreen={require("./2")}/>
        );
    }
});