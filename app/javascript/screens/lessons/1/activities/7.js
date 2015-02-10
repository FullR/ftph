var React    = require("react"),
    Activity = require("screens/lessons/1/activities-4-15");

var Lesson1Activity7 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="7"
                lessonScreen={require("screens/lessons/1-l")}
                autoplayAnimation="choices-only"
                namespace="lesson-1-l"
                choices={[
                    {word: "leg", correct: true},
                    {word: "bell"},
                    {word: "fall"}
                ]}
                word1="lock"
                word2="lion"
                nextScreen={require("screens/lessons/1-n")}/>
        );
    }
});

module.exports = Lesson1Activity7;