var React = require("react"),
    Activity = require("screens/lessons/14/activity");

var Lesson14Activity2 = React.createClass({
    render: function() {
        return (
            <Activity
                id="2"
                choices={[
                    {word: "bed"},
                    {word: "bud"},
                    {word: "bad", correct: true}
                ]}
                removedPhonic="ih"
                addedPhonic="ah"
                targetWord="bid"
                nextScreen={require("./3")}/>
        );
    }
});

module.exports = Lesson14Activity2;
