var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="9"
                phonics={["m", "ah", "d"]}
                choices={[
                    {word: "mad", correct: true},
                    {word: "mask"},
                    {word: "dad"}
                ]}
                incorrectFeedback={(then, word) => 
                    word === "mask" ? [
                        then("say", "word"),
                        then("say", "doesnt-end-with"),
                        then("say", "phonics.2")
                    ] : [
                        then("say", "word"),
                        then("say", "doesnt-begin-with"),
                        then("say", "phonics.0")
                    ]
                }
                nextScreen={require("./10")}/>
        );
    }
});