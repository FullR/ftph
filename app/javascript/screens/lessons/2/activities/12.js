var React    = require("react"),
    Activity = require("screens/lessons/2/activities-4-15");

var Lesson2Activity12 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="12"
                lessonScreen={require("screens/lessons/2-m")}
                namespace="lesson-2-m"
                sublessonId="2-m"
                choices={[
                    {word: "stamp"},
                    {word: "swim", correct: true},
                    {word: "milk"}
                ]}
                word1="ham"
                word2="gum"
                nextScreen={require("screens/lessons/2/activities/13")}/>
        );
    }
});

module.exports = Lesson2Activity12;