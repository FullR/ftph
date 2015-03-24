var React = require("react"),
    Activity = require("screens/lessons/12/activity");

var Lesson12Activity17 = React.createClass({
    render: function() {
        return (
            <Activity
                id="17"
                choices={[
                    {word: "stomp"},
                    {word: "stamp"},
                    {word: "stump", correct: true}
                ]}
                nextScreen={require("./18")}/>
        );
    }
});

module.exports = Lesson12Activity17;
