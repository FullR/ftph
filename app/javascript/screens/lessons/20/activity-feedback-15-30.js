var React = require("react");
var WordFeedback = require("screens/activity-feedback/words");
var lessonInfo = require("./info");

var Lesson20ActivityFeedback15to30 = React.createClass({
    render: function() {
        var activity = this.props.activity;
        var word = activity.getSelected()[0].word;

        return <WordFeedback {...this.props}
            lessonId      = {lessonInfo.id}
            lessonTitle   = {lessonInfo.title}
            activityId    = {activity.props.id}
            activityCount = {lessonInfo.activityCount}
            section       = {lessonInfo.section}
            correct       = {activity.isCorrect()}
            words         = {[word]}

            sounds={{
                "letter": `common/activities/letters/${this.props.letter}`,
                "phonic": `phonics/activity-phonics/${this.props.phonic ? this.props.phonic : (this.props.letter + "h")}`,
                "makes-the": "lessons/lesson-20/feedback/makes-the",
                "sound-so": "lessons/lesson-20/feedback/sound-so",
                "has-an": "lessons/lesson-20/feedback/has-an",
                "has-a": "lessons/lesson-20/feedback/has-a",
                "there-is": "lessons/lesson-20/feedback/there-is",
                "sound-in": "lessons/lesson-20/feedback/sound-in"
            }}

            correctAnimation={(then) => [
                then("say", ["words", 0]),
                then("say", "makes-the"),
                then("say", "phonic"),
                then("say", "sound-so"),
                then("say", ["words", 0]),
                (this.props.letter === "u" ?
                    then("say", "has-a") :
                    then("say", "has-an")
                ),
                then("say", "letter")
            ]}

            incorrectAnimation={(then) => [
                then("say", "there-is"),
                then("say", "phonic"),
                then("say", "sound-in"),
                then("say", ["words", 0])
            ]}/>
    }
});

module.exports = Lesson20ActivityFeedback15to30;