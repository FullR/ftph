var React = require("react"),
    Activity = require("screens/lessons/17/activity");

var Lesson17ActivityActivity4 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="4"
                choices={[
                    {word: "pin", correct: true},
                    {word: "pen"},
                    {word: "pan"}
                ]}
                nextScreen={require("./5")}/>
        );
    }
});

module.exports = Lesson17ActivityActivity4;
