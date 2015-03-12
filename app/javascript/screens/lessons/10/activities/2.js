var React = require("react"),
    Activity = require("screens/lessons/10/activity");

var Lesson10Activity2 = React.createClass({
    render: function() {
        return (
            <Activity
                id="2"
                choices={[
                    {word: "bell"},
                    {word: "ill", correct: true},
                    {word: "tall"}
                ]}
                nextScreen={require("./3")}/>
        );
    }
});

module.exports = Lesson10Activity2;
