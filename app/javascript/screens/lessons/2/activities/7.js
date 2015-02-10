var React    = require("react"),
    Activity = require("screens/lessons/2/activities-4-15");

var Lesson2Activity7 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="7"
                lessonScreen={require("screens/lessons/2-p")}
                namespace="lesson-2-p"
                choices={[
                    {word: "crib"},
                    {word: "lips"},
                    {word: "slip", correct: true}
                ]}
                word1="hop"
                word2="cap"
                nextScreen={require("screens/lessons/2-k")}/>
        );
    }
});

module.exports = Lesson2Activity7;