var React = require("react"),
    Activity = require("screens/lessons/10/activity");

var Lesson10Activity1 = React.createClass({
    render: function() {
        return (
            <Activity
                id="1"
                autoplayAnimation="instructions"
                choices={[
                    {word: "in", correct: true},
                    {word: "on"},
                    {word: "off"}
                ]}
                nextScreen={require("./2")}/>
        );
    }
});

module.exports = Lesson10Activity1;
