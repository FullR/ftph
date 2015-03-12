var React = require("react"),
    Activity = require("screens/lessons/9/activity");

var Lesson9Activity2 = React.createClass({
    render: function() {
        return (
            <Activity
                id="2"
                choices={[
                    {word: "on"},
                    {word: "end", correct: true},
                    {word: "under"}
                ]}
                nextScreen={require("./3")}/>
        );
    }
});

module.exports = Lesson9Activity2;
