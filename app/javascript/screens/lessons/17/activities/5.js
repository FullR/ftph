var React = require("react"),
    Activity = require("screens/lessons/17/activity");

var Lesson17ActivityActivity5 = React.createClass({
    render: function() {
        return (
            <Activity
                id="5"
                choices={[
                    {word: "lap"},
                    {word: "lip", correct: true},
                    {word: "loop"}
                ]}
                nextScreen={require("./6")}/>
        );
    }
});

module.exports = Lesson17ActivityActivity5;
