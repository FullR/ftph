var React = require("react"),
    Activity = require("screens/lessons/16/activity");

var Lesson16ActivityActivity2 = React.createClass({
    render: function() {
        return (
            <Activity
                id="2"
                choices={[
                    {word: "ball"},
                    {word: "bell", correct: true},
                    {word: "bull"}
                ]}
                nextScreen={require("./3")}/>
        );
    }
});

module.exports = Lesson16ActivityActivity2;
