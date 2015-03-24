var React = require("react"),
    Activity = require("screens/lessons/11/activity");

var Lesson11Activity6 = React.createClass({
    render: function() {
        return (
            <Activity
                id="6"
                choices={[
                    {word: "lock", correct: true},
                    {word: "lick"},
                    {word: "lake"}
                ]}
                nextScreen={require("./7")}/>
        );
    }
});

module.exports = Lesson11Activity6;
