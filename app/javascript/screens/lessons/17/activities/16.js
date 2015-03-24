var React = require("react"),
    Activity = require("screens/lessons/17/activity");

var Lesson17ActivityActivity16 = React.createClass({
    render: function() {
        return (
            <Activity
                id="16"
                choices={[
                    {word: "chess"},
                    {word: "chips", correct: true},
                    {word: "cheese"}
                ]}
                nextScreen={require("./17")}/>
        );
    }
});

module.exports = Lesson17ActivityActivity16;
