var React = require("react"),
    Activity = require("screens/lessons/8/activity");

var Lesson8Activity7 = React.createClass({
    render: function() {
        return (
            <Activity
                id="7"
                choices={[
                    {word: "bit"},
                    {word: "boat"},
                    {word: "bat", correct: true}
                ]}
                nextScreen={require("./8")}/>
        );
    }
});

module.exports = Lesson8Activity7;
