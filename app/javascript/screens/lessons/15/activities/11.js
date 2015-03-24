var React = require("react"),
    Activity = require("screens/lessons/15/activity");

var Lesson15ActivityActivity11 = React.createClass({
    render: function() {
        return (
            <Activity
                id="11"
                choices={[
                    {word: "mop"},
                    {word: "map", correct: true},
                    {word: "men"}
                ]}
                nextScreen={require("./12")}/>
        );
    }
});

module.exports = Lesson15ActivityActivity11;
