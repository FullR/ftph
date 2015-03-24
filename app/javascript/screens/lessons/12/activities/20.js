var React = require("react"),
    Activity = require("screens/lessons/12/activity");

var Lesson12Activity20 = React.createClass({
    render: function() {
        return (
            <Activity
                id="20"
                choices={[
                    {word: "duck", correct: true},
                    {word: "dock"},
                    {word: "deck"}
                ]}
                nextScreen={require("screens/lessons/12/lesson-feedback")}/>
        );
    }
});

module.exports = Lesson12Activity20;
