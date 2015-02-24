var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="14"
                phonics={["f", "ih", "s", "t"]}
                choices={[
                    {word: "fish"},
                    {word: "fast"},
                    {word: "fist", correct: true}
                ]}
                incorrectFeedback={(then, word) => word === "fish" ? [
                    then("say", "word"),
                    then("say", "doesnt-end-with"),
                    then("say", "phonics.3")
                ] : [
                    then("say", "word"),
                    then("say", "doesnt-make-the"),
                    then("say", "phonics.1"),
                    then("say", "sound")
                ]}
                nextScreen={require("./15")}/>
        );
    }
});
