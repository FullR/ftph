var React = require("react"),
    Activity = require("screens/lessons/16/activity");

var Lesson16ActivityActivity16 = React.createClass({
    render: function() {
        return (
            <Activity
                id="16"
                choices={[
                    {word: "chimp"},
                    {word: "chest", correct: true},
                    {word: "chain"}
                ]}
                nextScreen={require("./17")}/>
        );
    }
});

module.exports = Lesson16ActivityActivity16;
