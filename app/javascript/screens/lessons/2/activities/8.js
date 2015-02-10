var React    = require("react"),
    Activity = require("screens/lessons/2/activities-4-15");

var Lesson2Activity8 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="8"
                lessonScreen={require("screens/lessons/2-k")}
                namespace="lesson-2-k"
                choices={[
                    {word: "truck", correct: true},
                    {word: "tickle"},
                    {word: "kite"}
                ]}
                word1="duck"
                word2="lake"
                nextScreen={require("screens/lessons/2/activities/9")}/>
        );
    }
});

module.exports = Lesson2Activity8;