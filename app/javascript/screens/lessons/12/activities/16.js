var React = require("react"),
    Activity = require("screens/lessons/12/activity");

var Lesson12Activity16 = React.createClass({
    render: function() {
        return (
            <Activity
                id="16"
                choices={[
                    {word: "rest"},
                    {word: "rush", correct: true},
                    {word: "wrench"}
                ]}
                nextScreen={require("./17")}/>
        );
    }
});

module.exports = Lesson12Activity16;
