var React = require("react"),
    Activity = require("screens/lessons/15/activity");

var Lesson15ActivityActivity7 = React.createClass({
    render: function() {
        return (
            <Activity
                id="7"
                choices={[
                    {word: "bit"},
                    {word: "beet"},
                    {word: "bat", correct: true}
                ]}
                nextScreen={require("./8")}/>
        );
    }
});

module.exports = Lesson15ActivityActivity7;
