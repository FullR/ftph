var React    = require("react"),
    Activity = require("screens/lessons/1/activities-4-15");

var Lesson1Activity10 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="10"
                lessonScreen={require("screens/lessons/1-r")}
                namespace="lesson-1-r"
                sublessonId="1-r"
                choices={[
                    {word: "dirt"},
                    {word: "rug", correct: true},
                    {word: "stir"}
                ]}
                word1="rat"
                word2="rain"
                nextScreen={require("screens/lessons/1/activities/11")}/>
        );
    }
});

module.exports = Lesson1Activity10;