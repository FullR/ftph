var React = require("react"),
    Activity = require("screens/lessons/16/activity");

var Lesson16ActivityActivity19 = React.createClass({
    render: function() {
        return (
            <Activity
                id="19"
                choices={[
                    {word: "stop"},
                    {word: "step", correct: true},
                    {word: "stool"}
                ]}
                nextScreen={require("screens/lessons/16/lesson-feedback")}/>
        );
    }
});

module.exports = Lesson16ActivityActivity19;
