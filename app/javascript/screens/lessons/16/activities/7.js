var React = require("react"),
    Activity = require("screens/lessons/16/activity");

var Lesson16ActivityActivity7 = React.createClass({
    render: function() {
        return (
            <Activity
                id="7"
                choices={[
                    {word: "egg", correct: true},
                    {word: "igloo"},
                    {word: "ugly"}
                ]}
                nextScreen={require("./8")}/>
        );
    }
});

module.exports = Lesson16ActivityActivity7;
