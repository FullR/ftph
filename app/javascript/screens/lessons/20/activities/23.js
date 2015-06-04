var React = require("react"),
    Activity = require("screens/lessons/20/activity-15-30");

var Lesson20Activity23 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="23"
                choices={[
                    {word: "bug", correct: true},
                    {word: "bag"},
                    {word: "big"}
                ]}
                letter="u"
                nextScreen={require("./24")}/>
        );
    }
});

module.exports = Lesson20Activity23;
