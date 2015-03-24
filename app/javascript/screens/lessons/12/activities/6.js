var React = require("react"),
    Activity = require("screens/lessons/12/activity");

var Lesson12Activity6 = React.createClass({
    render: function() {
        return (
            <Activity
                id="6"
                choices={[
                    {word: "rug", correct: true},
                    {word: "rag"},
                    {word: "rig"}
                ]}
                nextScreen={require("./7")}/>
        );
    }
});

module.exports = Lesson12Activity6;
