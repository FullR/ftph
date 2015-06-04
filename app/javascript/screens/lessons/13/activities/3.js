var React = require("react"),
    Activity = require("screens/lessons/13/activity");

var Lesson13Activity3 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="3"
                correctPhonic="uh"
                incorrectPhonic="eh"
                choices={[
                    {word: "run", correct: true},
                    {word: "hen"},
                    {word: "bed"}
                ]}
                nextScreen={require("./4")}/>
        );
    }
});

module.exports = Lesson13Activity3;
