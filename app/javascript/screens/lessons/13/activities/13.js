var React = require("react"),
    Activity = require("screens/lessons/13/activity");

var Lesson13Activity13 = React.createClass({
    render: function() {
        return (
            <Activity
                id="13"
                correctPhonic="eh"
                incorrectPhonic="ih"
                choices={[
                    {word: "ship"},
                    {word: "dish"},
                    {word: "chef", correct: true}
                ]}
                nextScreen={require("./14")}/>
        );
    }
});

module.exports = Lesson13Activity13;
