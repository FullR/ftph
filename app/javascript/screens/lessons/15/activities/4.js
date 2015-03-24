var React = require("react"),
    Activity = require("screens/lessons/15/activity");

var Lesson15ActivityActivity4 = React.createClass({
    render: function() {
        return (
            <Activity
                id="4"
                choices={[
                    {word: "mud"},
                    {word: "mad", correct: true},
                    {word: "mitt"}
                ]}
                nextScreen={require("./5")}/>
        );
    }
});

module.exports = Lesson15ActivityActivity4;
