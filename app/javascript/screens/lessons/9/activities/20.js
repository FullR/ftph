var React = require("react"),
    Activity = require("screens/lessons/9/activity");

var Lesson9Activity20 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="20"
                choices={[
                    {word: "father"},
                    {word: "fifteen"},
                    {word: "feather", correct: true}
                ]}
                nextScreen={require("screens/lessons/9/lesson-feedback")}/>
        );
    }
});

module.exports = Lesson9Activity20;
