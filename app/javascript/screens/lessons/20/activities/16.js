var React = require("react"),
    Activity = require("screens/lessons/20/activity-15-30");

var Lesson20Activity16 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="16"
                choices={[
                    {word: "cat", correct: true},
                    {word: "cut"},
                    {word: "coat"}
                ]}
                letter="a"
                nextScreen={require("./17")}/>
        );
    }
});

module.exports = Lesson20Activity16;
