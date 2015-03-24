var React = require("react"),
    Activity = require("screens/lessons/17/activity");

var Lesson17ActivityActivity8 = React.createClass({
    render: function() {
        return (
            <Activity
                id="8"
                choices={[
                    {word: "spin", correct: true},
                    {word: "spoon"},
                    {word: "spray"}
                ]}
                nextScreen={require("./10")}/>
        );
    }
});

module.exports = Lesson17ActivityActivity8;
