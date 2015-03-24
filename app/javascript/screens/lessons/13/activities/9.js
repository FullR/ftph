var React = require("react"),
    Activity = require("screens/lessons/13/activity");

var Lesson13Activity9 = React.createClass({
    render: function() {
        return (
            <Activity
                id="9"
                correctPhonic="ih"
                incorrectPhonic="eh"
                choices={[
                    {word: "sit", correct: true},
                    {word: "set"},
                    {word: "red"}
                ]}
                nextScreen={require("./10")}/>
        );
    }
});

module.exports = Lesson13Activity9;
