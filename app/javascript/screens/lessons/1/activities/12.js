var React    = require("react"),
    Activity = require("screens/lessons/1/activities-4-15");

var Lesson1Activity12 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="12"
                lessonScreen={require("screens/lessons/1-g")}
                namespace="lesson-1-g"
                choices={[
                    {word: "gum", correct: true},
                    {word: "igloo"},
                    {word: "bug"}
                ]}
                word1="gate"
                word2="giggle"
                nextScreen={require("screens/lessons/1/activities/13")}/>
        );
    }
});

module.exports = Lesson1Activity12;