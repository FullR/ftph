var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="12"
                phonics={["s", "iih", "t"]}
                choices={[
                    {word: "cent"},
                    {word: "sit", correct: true},
                    {word: "sip"}
                ]}
                incorrectFeedback={(then, word) => word === "cent" ? [
                    then("say", "word"),
                    then("say", "doesnt-make"),
                    then("say", "an"),
                    then("say", "phonics.1"),
                    then("say", "sound")
                ] : [
                    then("say", "word"),
                    then("say", "doesnt-end-with"),
                    then("say", "phonics.2")
                ]}
                nextScreen={require("./13")}/>
        );
    }
});
