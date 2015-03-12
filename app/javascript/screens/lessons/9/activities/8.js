var React = require("react"),
    Activity = require("screens/lessons/9/activity");

var Lesson9Activity8 = React.createClass({
    render: function() {
        return (
            <Activity
                id="8"
                choices={[
                    {word: "egg", correct: true},
                    {word: "igloo"},
                    {word: "ugly"}
                ]}
                nextScreen={require("./9")}/>
        );
    }
});

module.exports = Lesson9Activity8;
