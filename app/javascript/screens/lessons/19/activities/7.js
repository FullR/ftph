var React = require("react"),
    Activity = require("screens/lessons/19/activity");

var Lesson19Activity7 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="7"
                choices={[
                    {word: "pop"},
                    {word: "pipe"},
                    {word: "pup", correct: true}
                ]}
                nextScreen={require("./8")}/>
        );
    }
});

module.exports = Lesson19Activity7;
