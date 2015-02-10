var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="3"
                phonics={["iih", "l"]}
                choices={[
                    {word: "hill"},
                    {word: "ill", correct: true},
                    {word: "fall"}
                ]}
                feedbackSounds={{
                    "h": "phonics/activity-phonics/h",
                    "f": "phonics/activity-phonics/f"
                }}
                incorrectFeedback={(then, word) => word === "hill" ? [
                    then("say", "word"),
                    then("say", "makes"),
                    then("say", "phonics.0"),
                    then("say", "and"),
                    then("say", "phonics.1"),
                    then("say", "sounds"),
                    then("say", "but"),
                    then("say", "it-begins-with"),
                    then("say", "h")
                ] : [
                    then("say", "word"),
                    then("say", "doesnt-make"),
                    then("say", "an"),
                    then("say", "phonics.0"),
                    then("say", "sound"),
                    then("say", "and"),
                    then("say", "it-begins-with"),
                    then("say", "f")
                ]}
                nextScreen={require("./4")}/>
        );
    }
});