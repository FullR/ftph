var React = require("react"),
    Activity = require("screens/lessons/9/activity");

var Lesson9Activity7 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="7"
                choices={[
                    {word: "pin"},
                    {word: "pen", correct: true},
                    {word: "pan"}
                ]}
                nextScreen={require("./8")}/>
        );
    }
});

module.exports = Lesson9Activity7;
