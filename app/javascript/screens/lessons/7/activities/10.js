var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="10"
                phonics={["sh", "iih", "n"]}
                choices={[
                    {word: "shin", correct: true},
                    {word: "ship"},
                    {word: "chin"}
                ]}
                feedbackSounds={{
                    "ch": "phonics/activity-phonics/ch"
                }}
                incorrectFeedback={(then, word) => word === "ship" ? [
                    then("say", "word"),
                    then("say", "doesnt-end-with"),
                    then("say", "phonics.2")
                ] : [
                    then("say", "word"),
                    then("say", "begins-with"),
                    then("say", "ch")
                ]}
                nextScreen={require("./11")}/>
        );
    }
});
