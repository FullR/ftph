var React = require("react"),
    Activity = require("screens/lessons/15/activity");

var Lesson15ActivityActivity10 = React.createClass({
    render: function() {
        return (
            <Activity
                id="10"
                choices={[
                    {word: "dig"},
                    {word: "drag", correct: true},
                    {word: "dog"}
                ]}
                nextScreen={require("./11")}/>
        );
    }
});

module.exports = Lesson15ActivityActivity10;
