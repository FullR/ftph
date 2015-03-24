var React = require("react"),
    Activity = require("screens/lessons/14/activity");

var Lesson14Activity15 = React.createClass({
    render: function() {
        return (
            <Activity
                id="15"
                choices={[
                    {word: "batter"},
                    {word: "boater"},
                    {word: "butter", correct: true}
                ]}
                removedPhonic="eh"
                addedPhonic="uh"
                targetWord="better"
                nextScreen={require("screens/lessons/14/lesson-feedback")}/>
        );
    }
});

module.exports = Lesson14Activity15;
