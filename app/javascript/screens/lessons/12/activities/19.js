var React = require("react"),
    Activity = require("screens/lessons/12/activity");

var Lesson12Activity19 = React.createClass({
    render: function() {
        return (
            <Activity
                id="19"
                choices={[
                    {word: "bench"},
                    {word: "punch", correct: true},
                    {word: "pitch"}
                ]}
                nextScreen={require("./20")}/>
        );
    }
});

module.exports = Lesson12Activity19;
