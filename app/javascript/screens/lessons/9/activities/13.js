var React = require("react"),
    Activity = require("screens/lessons/8/activity");

var Lesson8Activity13 = React.createClass({
    render: function() {
        return (
            <Activity
                id="13"
                choices={[
                    {word: "fist"},
                    {word: "fast", correct: true},
                    {word: "feast"}
                ]}
                nextScreen={require("./14")}/>
        );
    }
});

module.exports = Lesson8Activity13;
