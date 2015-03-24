var React = require("react"),
    Activity = require("screens/lessons/11/activity");

var Lesson11Activity14 = React.createClass({
    render: function() {
        return (
            <Activity
                id="14"
                choices={[
                    {word: "flip"},
                    {word: "flap"},
                    {word: "flop", correct: true}
                ]}
                nextScreen={require("./15")}/>
        );
    }
});

module.exports = Lesson11Activity14;
