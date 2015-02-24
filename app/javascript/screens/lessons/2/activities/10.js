var React    = require("react"),
    Activity = require("screens/lessons/2/activities-4-15");

var Lesson2Activity10 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="10"
                lessonScreen={require("screens/lessons/2-f")}
                namespace="lesson-2-f"
                sublessonId="2-f"
                choices={[
                    {word: "moth"},
                    {word: "laugh", correct: true},
                    {word: "office"}
                ]}
                word1="off"
                word2="roof"
                nextScreen={require("screens/lessons/2/activities/11")}/>
        );
    }
});

module.exports = Lesson2Activity10;