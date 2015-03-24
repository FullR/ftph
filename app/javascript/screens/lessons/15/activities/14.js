var React = require("react"),
    Activity = require("screens/lessons/15/activity");

var Lesson15ActivityActivity14 = React.createClass({
    render: function() {
        return (
            <Activity
                id="14"
                choices={[
                    {word: "rest"},
                    {word: "rush"},
                    {word: "rash", correct: true}
                ]}
                nextScreen={require("./15")}/>
        );
    }
});

module.exports = Lesson15ActivityActivity14;
