var React = require("react"),
    Activity = require("screens/lessons/17/activity");

var Lesson17ActivityActivity15 = React.createClass({
    render: function() {
        return (
            <Activity
                id="15"
                choices={[
                    {word: "pal"},
                    {word: "pill", correct: true},
                    {word: "pool"}
                ]}
                nextScreen={require("./16")}/>
        );
    }
});

module.exports = Lesson17ActivityActivity15;
