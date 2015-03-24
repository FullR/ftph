var React = require("react"),
    Activity = require("screens/lessons/15/activity");

var Lesson15ActivityActivity8 = React.createClass({
    render: function() {
        return (
            <Activity
                id="8"
                choices={[
                    {word: "lap", correct: true},
                    {word: "lip"},
                    {word: "loop"}
                ]}
                nextScreen={require("./10")}/>
        );
    }
});

module.exports = Lesson15ActivityActivity8;
