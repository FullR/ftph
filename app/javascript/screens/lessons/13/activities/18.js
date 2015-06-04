var React = require("react"),
    Activity = require("screens/lessons/13/activity");

var Lesson13Activity18 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="18"
                correctPhonic="ah"
                incorrectPhonic="eh"
                choices={[
                    {word: "treasure"},
                    {word: "head"},
                    {word: "ladder", correct: true}
                ]}
                nextScreen={require("./19")}/>
        );
    }
});

module.exports = Lesson13Activity18;
