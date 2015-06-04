var React = require("react"),
    Activity = require("screens/lessons/15/activity");

var Lesson15ActivityActivity19 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="19"
                choices={[
                    {word: "screen"},
                    {word: "scratch", correct: true},
                    {word: "screw"}
                ]}
                nextScreen={require("screens/lessons/15/lesson-feedback")}/>
        );
    }
});

module.exports = Lesson15ActivityActivity19;
