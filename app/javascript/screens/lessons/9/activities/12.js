var React = require("react"),
    Activity = require("screens/lessons/9/activity");

var Lesson9Activity12 = React.createClass({
    render: function() {
        return (
            <Activity
                id="12"
                choices={[
                    {word: "tin"},
                    {word: "ten", correct: true},
                    {word: "tan"}
                ]}
                nextScreen={require("./13")}/>
        );
    }
});

module.exports = Lesson9Activity12;
