var React = require("react"),
    Activity = require("screens/lessons/15/activity");

var Lesson15ActivityActivity8 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="8"
                choices={[
                    {word: "lap", correct: true},
                    {word: "lip"},
                    {word: "loop"}
                ]}
                nextScreen={require("./9")}/>
        );
    }
});

module.exports = Lesson15ActivityActivity8;
