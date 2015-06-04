var React = require("react"),
    Activity = require("screens/lessons/16/activity");

var Lesson16ActivityActivity6 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="6"
                choices={[
                    {word: "pin"},
                    {word: "pen", correct: true},
                    {word: "pan"}
                ]}
                nextScreen={require("./7")}/>
        );
    }
});

module.exports = Lesson16ActivityActivity6;
