var React = require("react"),
    Activity = require("screens/lessons/14/activity");

var Lesson14Activity3 = React.createClass({
    render: function() {
        return (
            <Activity
                id="3"
                choices={[
                    {word: "hit", correct: true},
                    {word: "hat"},
                    {word: "hut"}
                ]}
                removedPhonic="oh"
                addedPhonic="ih"
                targetWord="hot"
                nextScreen={require("./4")}/>
        );
    }
});

module.exports = Lesson14Activity3;
