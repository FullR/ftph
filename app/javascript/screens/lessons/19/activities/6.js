var React = require("react"),
    Activity = require("screens/lessons/19/activity");

var Lesson19Activity6 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="6"
                choices={[
                    {word: "run", correct: true},
                    {word: "ring"},
                    {word: "rain"}
                ]}
                nextScreen={require("./7")}/>
        );
    }
});

module.exports = Lesson19Activity6;
