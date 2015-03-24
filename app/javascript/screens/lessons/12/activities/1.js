var React = require("react"),
    Activity = require("screens/lessons/12/activity");

var Lesson12Activity1 = React.createClass({
    render: function() {
        return (
            <Activity
                id="1"
                autoplayAnimation="instructions"
                choices={[
                    {word: "up", correct: true},
                    {word: "in"},
                    {word: "on"}
                ]}
                nextScreen={require("./2")}/>
        );
    }
});

module.exports = Lesson12Activity1;
