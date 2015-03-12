var React = require("react"),
    Activity = require("screens/lessons/9/activity");

var Lesson9Activity9 = React.createClass({
    render: function() {
        return (
            <Activity
                id="9"
                choices={[
                    {word: "sit"},
                    {word: "set", correct: true},
                    {word: "seat"}
                ]}
                nextScreen={require("./10")}/>
        );
    }
});

module.exports = Lesson9Activity9;
