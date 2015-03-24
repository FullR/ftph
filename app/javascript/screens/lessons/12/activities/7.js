var React = require("react"),
    Activity = require("screens/lessons/12/activity");

var Lesson12Activity7 = React.createClass({
    render: function() {
        return (
            <Activity
                id="7"
                choices={[
                    {word: "run", correct: true},
                    {word: "ring"},
                    {word: "rain"}
                ]}
                nextScreen={require("./8")}/>
        );
    }
});

module.exports = Lesson12Activity7;
