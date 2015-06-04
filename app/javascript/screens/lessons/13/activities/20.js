var React = require("react"),
    Activity = require("screens/lessons/13/activity");

var Lesson13Activity20 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="20"
                correctPhonic="ih"
                incorrectPhonic="eh"
                choices={[
                    {word: "sled"},
                    {word: "pitch", correct: true},
                    {word: "bench"}
                ]}
                nextScreen={require("screens/lessons/13/lesson-feedback")}/>
        );
    }
});

module.exports = Lesson13Activity20;
