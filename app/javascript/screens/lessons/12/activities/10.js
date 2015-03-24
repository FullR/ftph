var React = require("react"),
    Activity = require("screens/lessons/12/activity");

var Lesson12Activity10 = React.createClass({
    render: function() {
        return (
            <Activity
                id="10"
                choices={[
                    {word: "hat"},
                    {word: "hut", correct: true},
                    {word: "hot"}
                ]}
                nextScreen={require("./11")}/>
        );
    }
});

module.exports = Lesson12Activity10;
