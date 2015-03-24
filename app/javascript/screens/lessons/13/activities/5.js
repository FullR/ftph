var React = require("react"),
    Activity = require("screens/lessons/13/activity");

var Lesson13Activity5 = React.createClass({
    render: function() {
        return (
            <Activity
                id="5"
                correctPhonic="oh"
                incorrectPhonic="ah"
                choices={[
                    {word: "mad"},
                    {word: "mop", correct: true},
                    {word: "cat"}
                ]}
                nextScreen={require("./6")}/>
        );
    }
});

module.exports = Lesson13Activity5;
