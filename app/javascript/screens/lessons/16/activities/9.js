var React = require("react"),
    Activity = require("screens/lessons/16/activity");

var Lesson16ActivityActivity9 = React.createClass({
    render: function() {
        return (
            <Activity
                id="9"
                choices={[
                    {word: "bug"},
                    {word: "beg", correct: true},
                    {word: "bag"}
                ]}
                nextScreen={require("./10")}/>
        );
    }
});

module.exports = Lesson16ActivityActivity9;
