var React    = require("react"),
    Activity = require("screens/lessons/1/activities-4-15");

var Lesson1Activity4 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="4"
                lessonScreen={require("screens/lessons/1-m")}
                namespace="lesson-1-m"
                sublessonId="1-m"
                choices={[
                    {word: "map", correct: true},
                    {word: "jam"},
                    {word: "hammer"}
                ]}
                word1="mom"
                word2="monkey"
                nextScreen={require("screens/lessons/1/activities/5")}/>
        );
    }
});

module.exports = Lesson1Activity4;