var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="7"
                phonics={["b", "uh", "g"]}
                choices={[
                    {word: "bug", correct: true},
                    {word: "dog"},
                    {word: "rug"}
                ]}
                incorrectFeedback={(then, word) => {
                    if(word === "dog") {
                        return [
                            then("say", "word"),
                            then("say", "doesnt-have-the"),
                            then("say", "phonics.1"),
                            then("say", "sound"),
                            then("say", "or-begin-with"),
                            then("say", "phonics.0")
                        ];
                    }
                    else {
                        return [
                            then("say", "word"),
                            then("say", "doesnt-begin-with"),
                            then("say", "phonics.0")
                        ];
                    }
                }}
                nextScreen={require("./8")}/>
        );
    }
});