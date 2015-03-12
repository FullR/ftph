var React = require("react"),
    Activity = require("screens/lessons/8/activity");

var Lesson8Activity14 = React.createClass({
    render: function() {
        return (
            <Activity
                id="14"
                choices={[
                    {word: "rest"},
                    {word: "rush"},
                    {word: "rash", correct: true}
                ]}
                nextScreen={require("./15")}/>
        );
    }
});

module.exports = Lesson8Activity14;
