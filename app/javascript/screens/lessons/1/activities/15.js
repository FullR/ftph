var React    = require("react"),
    Activity = require("screens/lessons/1/activities-4-15");

var Lesson1Activity15 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="15"
                lessonScreen={require("screens/lessons/1-s")}
                autoplayAnimation="choices-only"
                namespace="lesson-1-s"
                sublessonId="1-s"
                choices={[
                    {word: "fish"},
                    {word: "ship"},
                    {word: "sled", correct: true}
                ]}
                word1="sit"
                word2="sister"
                nextScreen={require("screens/lessons/1/lesson-feedback")}/>
        );
    }
});

module.exports = Lesson1Activity15;