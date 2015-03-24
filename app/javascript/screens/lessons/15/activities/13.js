var React = require("react"),
    Activity = require("screens/lessons/15/activity");

var Lesson15ActivityActivity13 = React.createClass({
    render: function() {
        return (
            <Activity
                id="13"
                choices={[
                    {word: "fist"},
                    {word: "fast", correct: true},
                    {word: "foot"}
                ]}
                nextScreen={require("./14")}/>
        );
    }
});

module.exports = Lesson15ActivityActivity13;
