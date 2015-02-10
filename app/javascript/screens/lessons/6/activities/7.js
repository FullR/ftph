var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="7"
                phonics={["b", "uh", "gh"]}
                choices={[
                    {word: "bug", correct: true},
                    {word: "dog"},
                    {word: "rug"}
                ]}
                incorrectFeedback={(then, word) => {
                    if(word === "dog") {
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
                            then("say", "phonics.0"),
                            then("say", "sound")
                        ];
                    }
                }}
                nextScreen={require("./8")}/>
        );
    }
});