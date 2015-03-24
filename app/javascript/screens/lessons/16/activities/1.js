var React = require("react"),
    Activity = require("screens/lessons/16/activity");

var Lesson16ActivityActivity1 = React.createClass({
    render: function() {
        return (
            <Activity
                id="1"
                autoplayAnimation="instructions"
                choices={[
                    {word: "red", correct: true},
                    {word: "pink"},
                    {word: "bath"}
                ]}
                nextScreen={require("./2")}/>
        );
    }
});

module.exports = Lesson16ActivityActivity1;
