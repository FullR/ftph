var React = require("react"),
    Activity = require("screens/lessons/11/activity");

var Lesson11Activity7 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="7"
                choices={[
                    {word: "pop", correct: true},
                    {word: "pipe"},
                    {word: "pup"}
                ]}
                nextScreen={require("./8")}/>
        );
    }
});

module.exports = Lesson11Activity7;
