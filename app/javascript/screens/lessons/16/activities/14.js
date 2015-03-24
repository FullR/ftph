var React = require("react"),
    Activity = require("screens/lessons/16/activity");

var Lesson16ActivityActivity14 = React.createClass({
    render: function() {
        return (
            <Activity
                id="14"
                choices={[
                    {word: "dust"},
                    {word: "desk", correct: true},
                    {word: "dish"}
                ]}
                nextScreen={require("./15")}/>
        );
    }
});

module.exports = Lesson16ActivityActivity14;
