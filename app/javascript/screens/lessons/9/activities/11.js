var React = require("react"),
    Activity = require("screens/lessons/9/activity");

var Lesson9Activity11 = React.createClass({
    render: function() {
        return (
            <Activity
                id="11"
                choices={[
                    {word: "bed", correct: true},
                    {word: "bud"},
                    {word: "bit"}
                ]}
                nextScreen={require("./12")}/>
        );
    }
});

module.exports = Lesson9Activity11;
