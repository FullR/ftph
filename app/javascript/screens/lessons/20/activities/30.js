var React = require("react"),
    Activity = require("screens/lessons/20/activity-15-30");

var Lesson20Activity30 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="30"
                choices={[
                    {word: "knit", correct: true},
                    {word: "knot"},
                    {word: "net"}
                ]}
                letter="i"
                nextScreen={require("screens/lessons/20/lesson-feedback")}/>
        );
    }
});

module.exports = Lesson20Activity30;
