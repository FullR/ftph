var React = require("react"),
    Activity = require("screens/lessons/9/activity");

var Lesson9Activity6 = React.createClass({
    render: function() {
        return (
            <Activity
                id="6"
                choices={[
                    {word: "white"},
                    {word: "wait"},
                    {word: "wet", correct: true}
                ]}
                nextScreen={require("./7")}/>
        );
    }
});

module.exports = Lesson9Activity6;
