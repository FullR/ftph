var React = require("react"),
    Activity = require("screens/lessons/10/activity");

var Lesson10Activity7 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="7"
                choices={[
                    {word: "flip", correct: true},
                    {word: "flap"},
                    {word: "flop"}
                ]}
                nextScreen={require("./8")}/>
        );
    }
});

module.exports = Lesson10Activity7;
