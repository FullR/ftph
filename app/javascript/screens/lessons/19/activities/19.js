var React = require("react"),
    Activity = require("screens/lessons/19/activity");

var Lesson19Activity19 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="19"
                choices={[
                    {word: "puddle", correct: true},
                    {word: "paddle"},
                    {word: "poodle"}
                ]}
                nextScreen={require("screens/lessons/19/lesson-feedback")}/>
        );
    }
});

module.exports = Lesson19Activity19;
