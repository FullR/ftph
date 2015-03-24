var React = require("react"),
    Activity = require("screens/lessons/11/activity");

var Lesson11Activity15 = React.createClass({
    render: function() {
        return (
            <Activity
                id="15"
                choices={[
                    {word: "stop", correct: true},
                    {word: "step"},
                    {word: "stool"}
                ]}
                nextScreen={require("./16")}/>
        );
    }
});

module.exports = Lesson11Activity15;
