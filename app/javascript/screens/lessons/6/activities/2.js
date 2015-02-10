var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="2"
                phonics={["uh", "p"]}
                choices={[
                    {word: "hot"},
                    {word: "cut"},
                    {word: "up", correct: true}
                ]}
                incorrectFeedback={(then, word) => {
                    if(word === "hot") {
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
                            then("say", "doesnt-begin-with"),
                            then("say", "phonics.0"),
                            then("say", "and"),
                            then("say", "doesnt-end-with"),
                            then("say", "phonics.1")
                        ];
                    }
                }}
                nextScreen={require("./3")}/>
        );
    }
});