var React = require("react"),
    Activity = require("screens/lessons/17/activity");

var Lesson17ActivityActivity9 = React.createClass({
    render: function() {
        return (
            <Activity
                id="9"
                choices={[
                    {word: "peg"},
                    {word: "pig", correct: true},
                    {word: "pug"}
                ]}
                nextScreen={require("./10")}/>
        );
    }
});

module.exports = Lesson17ActivityActivity9;
