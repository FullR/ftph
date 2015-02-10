var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="5"
                phonics={["b", "uuh", "g"]}
                choices={[
                    {word: "bat"},
                    {word: "beg"},
                    {word: "bug", correct: true}
                ]}
                incorrectFeedback={(then, word) => word === "bat" ? [
                    then("say", "word"),
                    then("say", "doesnt-make"),
                    then("say", "an"),
                    then("say", "phonics.1"),
                    then("say", "sound"),
                    then("say", "and"),
                    then("say", "doesnt-end-with"),
                    then("say", "phonics.2")
                ] : [
                    then("say", "word"),
                    then("say", "doesnt-make"),
                    then("say", "an"),
                    then("say", "phonics.1"),
                    then("say", "sound")
                ]}
                nextScreen={require("./6")}/>
        );
    }
});
