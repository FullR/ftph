var React = require("react"),
    Activity = require("screens/lessons/13/activity");

var Lesson13Activity6 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="6"
                correctPhonic="eh"
                incorrectPhonic="ih"
                choices={[
                    {word: "wet", correct: true},
                    {word: "hit"},
                    {word: "hill"}
                ]}
                nextScreen={require("./7")}/>
        );
    }
});

module.exports = Lesson13Activity6;
