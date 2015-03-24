var React = require("react"),
    Activity = require("screens/lessons/17/activity");

var Lesson17ActivityActivity11 = React.createClass({
    render: function() {
        return (
            <Activity
                id="11"
                choices={[
                    {word: "Ben"},
                    {word: "Bob"},
                    {word: "Bill", correct: true}
                ]}
                nextScreen={require("./12")}/>
        );
    }
});

module.exports = Lesson17ActivityActivity11;
