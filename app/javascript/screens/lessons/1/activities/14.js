var React    = require("react"),
    Activity = require("screens/lessons/1/activities-4-15");

var Lesson1Activity14 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="14"
                lessonScreen={require("screens/lessons/1-s")}
                namespace="lesson-1-s"
                choices={[
                    {word: "bus"},
                    {word: "zoo"},
                    {word: "sing", correct: true}
                ]}
                word1="sit"
                word2="sister"
                nextScreen={require("screens/lessons/1/activities/15")}/>
        );
    }
});

module.exports = Lesson1Activity14;