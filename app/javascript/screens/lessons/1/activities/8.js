var React    = require("react"),
    Activity = require("screens/lessons/1/activities-4-15");

var Lesson1Activity8 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="8"
                lessonScreen={require("screens/lessons/1-n")}
                namespace="lesson-1-n"
                sublessonId="1-n"
                choices={[
                    {word: "run"},
                    {word: "ant"},
                    {word: "nut", correct: true}
                ]}
                word1="nap"
                word2="neck"
                nextScreen={require("screens/lessons/1/activities/9")}/>
        );
    }
});

module.exports = Lesson1Activity8;