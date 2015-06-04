var React = require("react"),
    Activity = require("screens/lessons/13/activity");

var Lesson13Activity1 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="1"
                autoplayAnimation="instructions"
                correctPhonic="uh"
                incorrectPhonic="ah"
                choices={[
                    {word: "cat"},
                    {word: "cut", correct: true},
                    {word: "hat"}
                ]}
                nextScreen={require("./2")}/>
        );
    }
});

module.exports = Lesson13Activity1;
