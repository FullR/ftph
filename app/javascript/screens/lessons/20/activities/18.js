var React = require("react"),
    Activity = require("screens/lessons/20/activity-15-30");

var Lesson20Activity18 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="18"
                choices={[
                    {word: "tip", correct: true},
                    {word: "tap"},
                    {word: "top"}
                ]}
                letter="i"
                nextScreen={require("./19")}/>
        );
    }
});

module.exports = Lesson20Activity18;
