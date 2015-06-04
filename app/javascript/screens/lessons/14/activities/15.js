var React = require("react"),
    Activity = require("screens/lessons/14/activity");

var Lesson14Activity15 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="15"
                choices={[
                    {word: "batter"},
                    {word: "boater"},
                    {word: "battle", correct: true}
                ]}
                removedPhonic="ah"
                addedPhonic="uh"
                targetWord="butter"
                nextScreen={require("screens/lessons/14/lesson-feedback")}/>
        );
    }
});

module.exports = Lesson14Activity15;
