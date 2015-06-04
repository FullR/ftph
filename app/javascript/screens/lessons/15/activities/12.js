var React = require("react"),
    Activity = require("screens/lessons/15/activity");

var Lesson15ActivityActivity12 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="12"
                choices={[
                    {word: "flap", correct: true},
                    {word: "flip"},
                    {word: "flop"}
                ]}
                nextScreen={require("./13")}/>
        );
    }
});

module.exports = Lesson15ActivityActivity12;
