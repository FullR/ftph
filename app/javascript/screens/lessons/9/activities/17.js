var React = require("react"),
    Activity = require("screens/lessons/9/activity");

var Lesson9Activity17 = React.createClass({
    render: function() {
        return (
            <Activity
                id="17"
                choices={[
                    {word: "chimp"},
                    {word: "chest", correct: true},
                    {word: "chase"}
                ]}
                nextScreen={require("./18")}/>
        );
    }
});

module.exports = Lesson9Activity17;
