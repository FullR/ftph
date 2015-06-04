var React = require("react"),
    Activity = require("screens/lessons/20/activity-15-30");

var Lesson20Activity26 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="26"
                choices={[
                    {word: "pin"},
                    {word: "pen", correct: true},
                    {word: "pan"}
                ]}
                letter="e"
                nextScreen={require("./27")}/>
        );
    }
});

module.exports = Lesson20Activity26;
