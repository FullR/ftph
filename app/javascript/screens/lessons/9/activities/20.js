var React = require("react"),
    Activity = require("screens/lessons/8/activity");

var Lesson8Activity20 = React.createClass({
    render: function() {
        return (
            <Activity
                id="20"
                choices={[
                    {word: "screen"},
                    {word: "scratch", correct: true},
                    {word: "screw"}
                ]}
                nextScreen={require("screens/lessons/8/lesson-feedback")}/>
        );
    }
});

module.exports = Lesson8Activity20;
