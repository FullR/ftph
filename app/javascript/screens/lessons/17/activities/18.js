var React = require("react"),
    Activity = require("screens/lessons/17/activity");

var Lesson17ActivityActivity18 = React.createClass({
    render: function() {
        return (
            <Activity
                id="18"
                choices={[
                    {word: "eagle"},
                    {word: "igloo", correct: true},
                    {word: "ugly"}
                ]}
                nextScreen={require("./19")}/>
        );
    }
});

module.exports = Lesson17ActivityActivity18;
