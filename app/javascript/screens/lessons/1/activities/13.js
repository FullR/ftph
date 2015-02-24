var React    = require("react"),
    Activity = require("screens/lessons/1/activities-4-15");

var Lesson1Activity13 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="13"
                lessonScreen={require("screens/lessons/1-g")}
                autoplayAnimation="choices-only"
                namespace="lesson-1-g"
                sublessonId="1-g"
                choices={[
                    {word: "hug"},
                    {word: "gym"},
                    {word: "girl", correct: true}
                ]}
                word1="gate"
                word2="giggle"
                nextScreen={require("screens/lessons/1-s")}/>
        );
    }
});

module.exports = Lesson1Activity13;