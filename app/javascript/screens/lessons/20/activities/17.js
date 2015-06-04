var React = require("react"),
    Activity = require("screens/lessons/20/activity-15-30");

var Lesson20Activity17 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="17"
                choices={[
                    {word: "bud"},
                    {word: "bed", correct: true},
                    {word: "bad"}
                ]}
                letter="e"
                nextScreen={require("./18")}/>
        );
    }
});

module.exports = Lesson20Activity17;
