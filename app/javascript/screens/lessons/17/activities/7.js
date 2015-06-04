var React = require("react"),
    Activity = require("screens/lessons/17/activity");

var Lesson17ActivityActivity7 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="7"
                choices={[
                    {word: "boot"},
                    {word: "beet"},
                    {word: "bit", correct: true}
                ]}
                nextScreen={require("./8")}/>
        );
    }
});

module.exports = Lesson17ActivityActivity7;
