var React = require("react"),
    Activity = require("screens/lessons/16/activity");

var Lesson16ActivityActivity15 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="15"
                choices={[
                    {word: "bench", correct: true},
                    {word: "punch"},
                    {word: "pitch"}
                ]}
                nextScreen={require("./16")}/>
        );
    }
});

module.exports = Lesson16ActivityActivity15;
