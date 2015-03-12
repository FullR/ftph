var React = require("react"),
    Activity = require("screens/lessons/10/activity");

var Lesson10Activity19 = React.createClass({
    render: function() {
        return (
            <Activity
                id="19"
                choices={[
                    {word: "eagle"},
                    {word: "igloo", correct: true},
                    {word: "ugly"}
                ]}
                nextScreen={require("./20")}/>
        );
    }
});

module.exports = Lesson10Activity19;
