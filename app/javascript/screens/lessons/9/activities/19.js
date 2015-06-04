var React = require("react"),
    Activity = require("screens/lessons/9/activity");

var Lesson9Activity19 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="19"
                choices={[
                    {word: "guests", correct: true},
                    {word: "gifts"},
                    {word: "glasses"}
                ]}
                nextScreen={require("./20")}/>
        );
    }
});

module.exports = Lesson9Activity19;
