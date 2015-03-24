var React = require("react"),
    Activity = require("screens/lessons/17/activity");

var Lesson17ActivityActivity1 = React.createClass({
    render: function() {
        return (
            <Activity
                id="1"
                autoplayAnimation="instructions"
                choices={[
                    {word: "in", correct: true},
                    {word: "on"},
                    {word: "end"}
                ]}
                nextScreen={require("./2")}/>
        );
    }
});

module.exports = Lesson17ActivityActivity1;
