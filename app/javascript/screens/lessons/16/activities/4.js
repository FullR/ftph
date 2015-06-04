var React = require("react"),
    Activity = require("screens/lessons/16/activity");

var Lesson16ActivityActivity4 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="4"
                choices={[
                    {word: "pet", correct: true},
                    {word: "pot"},
                    {word: "putt"}
                ]}
                nextScreen={require("./5")}/>
        );
    }
});

module.exports = Lesson16ActivityActivity4;
