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
                            then("say", "doesnt-have-the"),
                            then("say", "phonics.0"),
                            then("say", "sound"),
                            then("say", "or-end-with"),
                            then("say", "phonics.1")
                        ];
                    }
                    else {
                        return [
                            then("say", "word"),
                            then("say", "doesnt-end-with"),
                            then("say", "phonics.1")
                        ];
                    }
                }}
                nextScreen={require("./5")}/>
        );
    }
});