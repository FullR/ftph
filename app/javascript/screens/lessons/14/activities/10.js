var React = require("react"),
    Activity = require("screens/lessons/14/activity");

var Lesson14Activity10 = React.createClass({
    render: function() {
        return (
            <Activity
                id="10"
                choices={[
                    {word: "bud", correct: true},
                    {word: "bird"},
                    {word: "bus"}
                ]}
                removedPhonic="eh"
                addedPhonic="uh"
                targetWord="bed"
                nextScreen={require("./11")}/>
        );
    }
});

module.exports = Lesson14Activity10;
