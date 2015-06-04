var React = require("react"),
    Activity = require("screens/lessons/8/activity");

var Lesson8Activity19 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="19"
                choices={[
                    {word: "screen"},
                    {word: "scratch", correct: true},
                    {word: "screw"}
                ]}
                nextScreen={require("screens/lessons/8/lesson-feedback")}/>
        );
    }
});

module.exports = Lesson8Activity19;
