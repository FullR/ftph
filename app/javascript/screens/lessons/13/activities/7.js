var React = require("react"),
    Activity = require("screens/lessons/13/activity");

var Lesson13Activity7 = React.createClass({
    render: function() {
        return (
            <Activity
                id="7"
                correctPhonic="ih"
                incorrectPhonic="eh"
                choices={[
                    {word: "pet"},
                    {word: "zip", correct: true},
                    {word: "desk"}
                ]}
                nextScreen={require("./8")}/>
        );
    }
});

module.exports = Lesson13Activity7;
