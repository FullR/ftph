var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="4"
                phonics={["ooh", "n"]}
                choices={[
                    {word: "in"},
                    {word: "on", correct: true},
                    {word: "off"}
                ]}
                incorrectFeedback={(then, word) => word === "in" ? [
                    then("say", "word"),
                    then("say", "doesnt-make"),
                    then("say", "an"),
                    then("say", "phonics.0"),
                    then("say", "sound")
                ] : [
                    then("say", "word"),
                    then("say", "doesnt-end-with"),
                    then("say", "phonics.1")
                ]}
                nextScreen={require("./5")}/>
        );
    }
});
