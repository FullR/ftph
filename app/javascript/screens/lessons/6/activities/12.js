var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="12"
                phonics={["w", "ih", "g"]}
                choices={[
                    {word: "wag"},
                    {word: "wig", correct: true},
                    {word: "wick"}
                ]}
                incorrectFeedback={(then, word) => 
                    word === "wag" ? [
                        then("say", "word"),
                        then("say", "doesnt-have-an"),
                        then("say", "phonics.1"),
                        then("say", "sound")
                    ] : [
                        then("say", "word"),
                        then("say", "doesnt-end-with"),
                        then("say", "a"),
                        then("say", "phonics.2")
                    ]
                }
                nextScreen={require("./13")}/>
        );
    }
});