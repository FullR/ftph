var React = require("react"),
    Activity = require("screens/lessons/10/activity");

var Lesson10Activity5 = React.createClass({
    render: function() {
        return (
            <Activity
                id="5"
                choices={[
                    {word: "pin", correct: true},
                    {word: "pen"},
                    {word: "pan"}
                ]}
                nextScreen={require("./6")}/>
        );
    }
});

module.exports = Lesson10Activity5;
