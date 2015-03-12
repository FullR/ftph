var React = require("react"),
    Activity = require("screens/lessons/8/activity");

var Lesson8Activity11 = React.createClass({
    render: function() {
        return (
            <Activity
                id="11"
                choices={[
                    {word: "mop"},
                    {word: "map", correct: true},
                    {word: "men"}
                ]}
                nextScreen={require("./12")}/>
        );
    }
});

module.exports = Lesson8Activity11;
