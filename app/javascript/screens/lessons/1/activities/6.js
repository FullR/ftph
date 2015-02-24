var React    = require("react"),
    Activity = require("screens/lessons/1/activities-4-15");

var Lesson1Activity6 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="6"
                lessonScreen={require("screens/lessons/1-l")}
                namespace="lesson-1-l"
                sublessonId="1-l"
                choices={[
                    {word: "ball"},
                    {word: "pillow"},
                    {word: "lip", correct: true}
                ]}
                word1="lock"
                word2="lion"
                nextScreen={require("screens/lessons/1/activities/7")}/>
        );
    }
});

module.exports = Lesson1Activity6;