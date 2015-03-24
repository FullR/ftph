var React = require("react"),
    Activity = require("screens/lessons/13/activity");

var Lesson13Activity4 = React.createClass({
    render: function() {
        return (
            <Activity
                id="4"
                correctPhonic="oh"
                incorrectPhonic="uh"
                choices={[
                    {word: "bug"},
                    {word: "sun"},
                    {word: "box", correct: true}
                ]}
                nextScreen={require("./5")}/>
        );
    }
});

module.exports = Lesson13Activity4;
