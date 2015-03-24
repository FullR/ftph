var React = require("react"),
    Activity = require("screens/lessons/13/activity");

var Lesson13Activity2 = React.createClass({
    render: function() {
        return (
            <Activity
                id="2"
                correctPhonic="uh"
                incorrectPhonic="ih"
                choices={[
                    {word: "sit"},
                    {word: "wig"},
                    {word: "bus", correct: true}
                ]}
                nextScreen={require("./3")}/>
        );
    }
});

module.exports = Lesson13Activity2;
