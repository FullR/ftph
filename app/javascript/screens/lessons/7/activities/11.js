var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="11"
                phonics={["n", "uuh", "t"]}
                choices={[
                    {word: "knot"},
                    {word: "nut", correct: true},
                    {word: "knight"}
                ]}
                incorrectFeedback={(then, word) => [
                    then("say", "word"),
                    then("say", "doesnt-make"),
                    then("say", "an"),
                    then("say", "phonics.1"),
                    then("say", "sound")
                ]}
                nextScreen={require("./12")}/>
        );
    }
});
