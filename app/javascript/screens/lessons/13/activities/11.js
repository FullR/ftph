var React = require("react"),
    Activity = require("screens/lessons/13/activity");

var Lesson13Activity11 = React.createClass({
    render: function() {
        return (
            <Activity
                id="11"
                correctPhonic="oh"
                incorrectPhonic="uh"
                choices={[
                    {word: "fox", correct: true},
                    {word: "bud"},
                    {word: "fun"}
                ]}
                nextScreen={require("./12")}/>
        );
    }
});

module.exports = Lesson13Activity11;
