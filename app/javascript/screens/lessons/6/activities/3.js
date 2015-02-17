var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="3"
                phonics={["ih", "n"]}
                choices={[
                    {word: "in", correct: true},
                    {word: "on"},
                    {word: "under"}
                ]}
                incorrectFeedback={(then, word) => {
                    if(word === "on") {
                        return [
                            then("say", "word"),
                            then("say", "doesnt-have-the"),
                            then("say", "phonics.0"),
                            then("say", "sound")
                        ];
                    }
                    else {
                        return [
                            then("say", "word"),
                            then("say", "doesnt-have-the"),
                            then("say", "phonics.0"),
                            then("say", "sound"),
                            then("say", "or-end-with"),
                            then("say", "phonics.1")
                        ];
                    }
                }}
                nextScreen={require("./4")}/>
        );
    }
});