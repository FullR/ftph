var React = require("react"),
    Activity = require("screens/lessons/19/activity");

var Lesson19Activity15 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="15"
                choices={[
                    {word: "rest"},
                    {word: "rush", correct: true},
                    {word: "wrench"}
                ]}
                nextScreen={require("./16")}/>
        );
    }
});

module.exports = Lesson19Activity15;
