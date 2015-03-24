var React = require("react"),
    Activity = require("screens/lessons/11/activity");

var Lesson11Activity10 = React.createClass({
    render: function() {
        return (
            <Activity
                id="10"
                choices={[
                    {word: "fast"},
                    {word: "fix"},
                    {word: "fox", correct: true}
                ]}
                nextScreen={require("./11")}/>
        );
    }
});

module.exports = Lesson11Activity10;
