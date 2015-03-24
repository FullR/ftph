var React = require("react"),
    Activity = require("screens/lessons/16/activity");

var Lesson16ActivityActivity13 = React.createClass({
    render: function() {
        return (
            <Activity
                id="13"
                choices={[
                    {word: "drip"},
                    {word: "drop"},
                    {word: "dress", correct: true}
                ]}
                nextScreen={require("./14")}/>
        );
    }
});

module.exports = Lesson16ActivityActivity13;
