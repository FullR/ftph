var React = require("react"),
    Activity = require("screens/lessons/13/activity");

var Lesson13Activity15 = React.createClass({
    render: function() {
        return (
            <Activity
                id="15"
                correctPhonic="uh"
                incorrectPhonic="ih"
                choices={[
                    {word: "stick"},
                    {word: "truck", correct: true},
                    {word: "trick"}
                ]}
                nextScreen={require("./16")}/>
        );
    }
});

module.exports = Lesson13Activity15;
