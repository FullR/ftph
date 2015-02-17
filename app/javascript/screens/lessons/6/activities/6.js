var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="6"
                phonics={["ah", "d"]}
                choices={[
                    {word: "add", correct: true},
                    {word: "head"},
                    {word: "hat"}
                ]}
                incorrectFeedback={(then, word) => {
                    if(word === "head") {
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
                nextScreen={require("./7")}/>
        );
    }
});