var React = require("react"),
    Activity = require("screens/lessons/15/activity");

var Lesson15ActivityActivity2 = React.createClass({
    render: function() {
        return (
            <Activity
                id="2"
                choices={[
                    {word: "beg"},
                    {word: "bag", correct: true},
                    {word: "big"}
                ]}
                nextScreen={require("./3")}/>
        );
    }
});

module.exports = Lesson15ActivityActivity2;
