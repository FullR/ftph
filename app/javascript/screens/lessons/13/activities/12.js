var React = require("react"),
    Activity = require("screens/lessons/13/activity");

var Lesson13Activity12 = React.createClass({
    render: function() {
        return (
            <Activity
                id="12"
                correctPhonic="uh"
                incorrectPhonic="oh"
                choices={[
                    {word: "clock"},
                    {word: "truck", correct: true},
                    {word: "drop"}
                ]}
                nextScreen={require("./13")}/>
        );
    }
});

module.exports = Lesson13Activity12;
