var React = require("react"),
    Activity = require("screens/lessons/13/activity");

var Lesson13Activity14 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="14"
                correctPhonic="oh"
                incorrectPhonic="eh"
                choices={[
                    {word: "feather"},
                    {word: "bread"},
                    {word: "father", correct: true}
                ]}
                nextScreen={require("./15")}/>
        );
    }
});

module.exports = Lesson13Activity14;
