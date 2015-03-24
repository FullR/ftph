var React = require("react"),
    Activity = require("screens/lessons/12/activity");

var Lesson12Activity13 = React.createClass({
    render: function() {
        return (
            <Activity
                id="13"
                choices={[
                    {word: "tick"},
                    {word: "truck", correct: true},
                    {word: "track"}
                ]}
                nextScreen={require("./14")}/>
        );
    }
});

module.exports = Lesson12Activity13;
