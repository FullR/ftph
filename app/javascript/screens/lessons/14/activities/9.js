var React = require("react"),
    Activity = require("screens/lessons/14/activity");

var Lesson14Activity9 = React.createClass({
    render: function() {
        return (
            <Activity
                id="9"
                choices={[
                    {word: "sit"},
                    {word: "set", correct: true},
                    {word: "seat"}
                ]}
                removedPhonic="ah"
                addedPhonic="eh"
                targetWord="sat"
                nextScreen={require("./10")}/>
        );
    }
});

module.exports = Lesson14Activity9;
