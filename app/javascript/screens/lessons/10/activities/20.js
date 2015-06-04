var React = require("react"),
    Activity = require("screens/lessons/10/activity");

var Lesson10Activity20 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="20"
                choices={[
                    {word: "injured", correct: true},
                    {word: "enter"},
                    {word: "under"}
                ]}
                nextScreen={require("screens/lessons/10/lesson-feedback")}/>
        );
    }
});

module.exports = Lesson10Activity20;
