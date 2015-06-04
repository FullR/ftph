var React = require("react"),
    Activity = require("screens/lessons/13/activity");

var Lesson13Activity10 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="10"
                correctPhonic="eh"
                incorrectPhonic="ih"
                choices={[
                    {word: "pin"},
                    {word: "pen", correct: true},
                    {word: "lip"}
                ]}
                nextScreen={require("./11")}/>
        );
    }
});

module.exports = Lesson13Activity10;
