var React = require("react"),
    Activity = require("screens/lessons/12/activity");

var Lesson12Activity12 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="12"
                choices={[
                    {word: "nut", correct: true},
                    {word: "net"},
                    {word: "knot"}
                ]}
                nextScreen={require("./13")}/>
        );
    }
});

module.exports = Lesson12Activity12;
