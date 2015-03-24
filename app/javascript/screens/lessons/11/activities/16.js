var React = require("react"),
    Activity = require("screens/lessons/11/activity");

var Lesson11Activity16 = React.createClass({
    render: function() {
        return (
            <Activity
                id="16"
                choices={[
                    {word: "stomp", correct: true},
                    {word: "stamp"},
                    {word: "stump"}
                ]}
                nextScreen={require("./17")}/>
        );
    }
});

module.exports = Lesson11Activity16;
