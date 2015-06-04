var React = require("react"),
    Activity = require("screens/lessons/19/activity");

var Lesson19Activity11 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="11"
                choices={[
                    {word: "nut", correct: true},
                    {word: "net"},
                    {word: "knot"}
                ]}
                nextScreen={require("./12")}/>
        );
    }
});

module.exports = Lesson19Activity11;
