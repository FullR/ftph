var React = require("react"),
    Activity = require("screens/lessons/20/activity-15-30");

var Lesson20Activity21 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="21"
                choices={[
                    {word: "bell", correct: true},
                    {word: "ball"},
                    {word: "bull"}
                ]}
                letter="e"
                nextScreen={require("./22")}/>
        );
    }
});

module.exports = Lesson20Activity21;
