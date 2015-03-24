var React = require("react"),
    Activity = require("screens/lessons/11/activity");

var Lesson11Activity17 = React.createClass({
    render: function() {
        return (
            <Activity
                id="17"
                choices={[
                    {word: "top", correct: true},
                    {word: "tip"},
                    {word: "tape"}
                ]}
                nextScreen={require("./18")}/>
        );
    }
});

module.exports = Lesson11Activity17;
