var React = require("react"),
    Activity = require("screens/lessons/10/activity");

var Lesson10Activity11 = React.createClass({
    render: function() {
        return (
            <Activity
                id="11"
                choices={[
                    {word: "punch"},
                    {word: "bench"},
                    {word: "pitch", correct: true}
                ]}
                nextScreen={require("./12")}/>
        );
    }
});

module.exports = Lesson10Activity11;
