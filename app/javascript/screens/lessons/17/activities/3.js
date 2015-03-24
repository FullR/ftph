var React = require("react"),
    Activity = require("screens/lessons/17/activity");

var Lesson17ActivityActivity3 = React.createClass({
    render: function() {
        return (
            <Activity
                id="3"
                choices={[
                    {word: "fin", correct: true},
                    {word: "fan"},
                    {word: "fun"}
                ]}
                nextScreen={require("./4")}/>
        );
    }
});

module.exports = Lesson17ActivityActivity3;
