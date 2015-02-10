var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="3"
                phonics={["ih", "nnh"]}
                choices={[
                    {word: "in", correct: true},
                    {word: "on"},
                    {word: "under"}
                ]}
                incorrectFeedback={(then, word) => {
                    if(word === "on") {
                        return [
                            then("say", "word"),
                            then("say", "doesnt-have"),
                            then("say", "an"),
                            then("say", "phonics.0"),
                            then("say", "sound")
                        ];
                    }
                    else {
                        return [
                            then("say", "word"),
                            then("say", "doesnt-have"),
                            then("say", "an"),
                            then("say", "phonics.0"),
                            then("say", "sound"),
                            then("say", "and"),
                            then("say", "doesnt-end-with"),
                            then("say", "phonics.1")
                        ];
                    }
                }}
                nextScreen={require("./4")}/>
        );
    }
});