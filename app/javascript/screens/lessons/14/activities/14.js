var React = require("react"),
    Activity = require("screens/lessons/14/activity");

var Lesson14Activity14 = React.createClass({
    render: function() {
        return (
            <Activity
                id="14"
                choices={[
                    {word: "fish"},
                    {word: "fast", correct: true},
                    {word: "fat"}
                ]}
                removedPhonic="ih"
                addedPhonic="ah"
                targetWord="fist"
                nextScreen={require("./15")}/>
        );
    }
});

module.exports = Lesson14Activity14;
