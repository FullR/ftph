var React = require("react"),
    Activity = require("screens/lessons/17/activity");

var Lesson17ActivityActivity12 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="12"
                choices={[
                    {word: "bed"},
                    {word: "bad"},
                    {word: "bid", correct: true}
                ]}
                nextScreen={require("./13")}/>
        );
    }
});

module.exports = Lesson17ActivityActivity12;
