var React = require("react"),
    Activity = require("screens/lessons/20/activity-15-30");

var Lesson20Activity25 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="25"
                choices={[
                    {word: "baby"},
                    {word: "bed"},
                    {word: "bad", correct: true}
                ]}
                letter="a"
                nextScreen={require("./26")}/>
        );
    }
});

module.exports = Lesson20Activity25;
