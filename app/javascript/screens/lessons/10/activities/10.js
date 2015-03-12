var React = require("react"),
    Activity = require("screens/lessons/10/activity");

var Lesson10Activity10 = React.createClass({
    render: function() {
        return (
            <Activity
                id="10"
                choices={[
                    {word: "peg"},
                    {word: "pig", correct: true},
                    {word: "pug"}
                ]}
                nextScreen={require("./11")}/>
        );
    }
});

module.exports = Lesson10Activity10;
