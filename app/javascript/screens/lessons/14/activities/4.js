var React = require("react"),
    Activity = require("screens/lessons/14/activity");

var Lesson14Activity4 = React.createClass({
    render: function() {
        return (
            <Activity
                id="4"
                choices={[
                    {word: "cape"},
                    {word: "cup"},
                    {word: "cop", correct: true}
                ]}
                removedPhonic="ah"
                addedPhonic="oh"
                targetWord="cap"
                nextScreen={require("./5")}/>
        );
    }
});

module.exports = Lesson14Activity4;
