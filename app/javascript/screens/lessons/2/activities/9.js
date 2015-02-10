var React    = require("react"),
    Activity = require("screens/lessons/2/activities-4-15");

var Lesson2Activity9 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="9"
                autoplayAnimation="choices-only"
                lessonScreen={require("screens/lessons/2-k")}
                namespace="lesson-2-k"
                choices={[
                    {word: "kitchen"},
                    {word: "pickle"},
                    {word: "kick", correct: true}
                ]}
                word1="duck"
                word2="lake"
                nextScreen={require("screens/lessons/2-f")}/>
        );
    }
});

module.exports = Lesson2Activity9;