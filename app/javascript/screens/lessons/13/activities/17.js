var React = require("react"),
    Activity = require("screens/lessons/13/activity");

var Lesson13Activity17 = React.createClass({
    render: function() {
        return (
            <Activity
                id="17"
                correctPhonic="ih"
                incorrectPhonic="uh"
                choices={[
                    {word: "brush"},
                    {word: "bridge", correct: true},
                    {word: "puddle"}
                ]}
                nextScreen={require("./18")}/>
        );
    }
});

module.exports = Lesson13Activity17;
