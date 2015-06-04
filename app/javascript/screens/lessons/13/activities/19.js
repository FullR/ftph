var React = require("react"),
    Activity = require("screens/lessons/13/activity");

var Lesson13Activity19 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="19"
                correctPhonic="ah"
                incorrectPhonic="uh"
                choices={[
                    {word: "crumb"},
                    {word: "crab", correct: true},
                    {word: "tongue"}
                ]}
                nextScreen={require("./20")}/>
        );
    }
});

module.exports = Lesson13Activity19;
