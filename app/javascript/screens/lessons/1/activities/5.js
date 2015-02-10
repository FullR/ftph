var React    = require("react"),
    Activity = require("screens/lessons/1/activities-4-15");

var Lesson1Activity5 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="5"
                lessonScreen={require("screens/lessons/1-m")}
                autoplayAnimation="choices-only"
                namespace="lesson-1-m"
                choices={[
                    {word: "clam"},
                    {word: "ram"},
                    {word: "man", correct: true}
                ]}
                word1="mom"
                word2="monkey"
                nextScreen={require("screens/lessons/1-l")}/>
        );
    }
});

module.exports = Lesson1Activity5;