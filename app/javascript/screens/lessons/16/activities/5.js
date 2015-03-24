var React = require("react"),
    Activity = require("screens/lessons/16/activity");

var Lesson16ActivityActivity5 = React.createClass({
    render: function() {
        return (
            <Activity
                id="5"
                choices={[
                    {word: "wood"},
                    {word: "wait"},
                    {word: "wet", correct: true}
                ]}
                nextScreen={require("./6")}/>
        );
    }
});

module.exports = Lesson16ActivityActivity5;
