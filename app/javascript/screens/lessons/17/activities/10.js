var React = require("react"),
    Activity = require("screens/lessons/17/activity");

var Lesson17ActivityActivity10 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="10"
                choices={[
                    {word: "punch"},
                    {word: "pitch", correct: true},
                    {word: "bench"}
                ]}
                nextScreen={require("./11")}/>
        );
    }
});

module.exports = Lesson17ActivityActivity10;
