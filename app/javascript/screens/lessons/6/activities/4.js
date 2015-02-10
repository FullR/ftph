var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="4"
                phonics={["ah", "cks"]}
                choices={[
                    {word: "ice"},
                    {word: "ax", correct: true},
                    {word: "ash"}
                ]}
                incorrectFeedback={(then, word) => {
                    if(word === "ice") {
                        return [
                            then("say", "word"),
                            then("say", "doesnt-have"),
                            then("say", "phonics.0"),
                            then("say", "or"),
                            then("say", "phonics.1"),
                            then("say", "sounds")
                        ];
                    }
                    else {
                        return [
                            then("say", "word"),
                            then("say", "doesnt-have"),
                            then("say", "a"),
                            then("say", "phonics.1"),
                            then("say", "sound")
                        ];
                    }
                }}
                nextScreen={require("./5")}/>
        );
    }
});