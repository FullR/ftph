var React = require("react"),
    Activity = require("screens/lessons/13/activity");

var Lesson13Activity16 = React.createClass({
    render: function() {
        return (
            <Activity
                id="16"
                correctPhonic="ah"
                incorrectPhonic="oh"
                choices={[
                    {word: "strap", correct: true},
                    {word: "stop"},
                    {word: "knot"}
                ]}
                nextScreen={require("./17")}/>
        );
    }
});

module.exports = Lesson13Activity16;
