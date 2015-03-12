var React = require("react"),
    Activity = require("screens/lessons/10/activity");

var Lesson10Activity6 = React.createClass({
    render: function() {
        return (
            <Activity
                id="6"
                choices={[
                    {word: "lap"},
                    {word: "lip", correct: true},
                    {word: "loop"}
                ]}
                nextScreen={require("./7")}/>
        );
    }
});

module.exports = Lesson10Activity6;
