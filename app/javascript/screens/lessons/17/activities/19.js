var React = require("react"),
    Activity = require("screens/lessons/17/activity");

var Lesson17ActivityActivity19 = React.createClass({
    render: function() {
        return (
            <Activity
                id="19"
                choices={[
                    {word: "injured", correct: true},
                    {word: "enter"},
                    {word: "under"}
                ]}
                nextScreen={require("screens/lessons/17/lesson-feedback")}/>
        );
    }
});

module.exports = Lesson17ActivityActivity19;
