var React = require("react"),
    WordFeedback = require("screens/activity-feedback/words"),
    lessonInfo = require("./info");

var Lesson13ActivityFeedback = React.createClass({
    render: function() {
        var activity = this.props.activity;
        return <WordFeedback {...this.props}
            lessonId      = {lessonInfo.id}
            lessonTitle   = {lessonInfo.title}
            activityId    = {activity.props.id}
            activityCount = {lessonInfo.activityCount}
            section       = {lessonInfo.section}
            correct       = {activity.isCorrect()}
            words         = {[activity.getSelected()[0].word]}

            sounds={{
                "correctPhonic": `phonics/activity-phonics/${this.props.correctPhonic}`,
                "incorrectPhonic": `phonics/activity-phonics/${this.props.incorrectPhonic}`,
                "correctWord": `words/activity-words/${activity.getCorrectWords()[0]}`,
                "incorrectWords": activity.getIncorrectWords().map((word) => `words/activity-words/${word}`),

                "makes-the": "lessons/lesson-13/activities/feedback/makes-the",
                "make-the": "lessons/lesson-13/activities/feedback/make-the",
                "sound": "lessons/lesson-13/activities/feedback/sound",
                "and": "lessons/lesson-13/activities/feedback/and",
                "make-the-same": "lessons/lesson-13/activities/feedback/make-the-same"
            }}

            correctAnimation={(then) => [
                then("say", "correctWord"),
                then("say", "makes-the"),
                then("say", "correctPhonic"),
                then("say", "sound"),
                then("say", "and"),
                then("say", ["incorrectWords", 0]),
                then("say", "and"),
                then("say", ["incorrectWords", 1]),
                then("say", "make-the"),
                then("say", "incorrectPhonic"),
                then("say", "sound")
            ]}

            incorrectAnimation={(then) => [
                then("say", ["incorrectWords", 0]),
                then("say", "and"),
                then("say", ["incorrectWords", 1]),
                then("say", "make-the-same"),
                then("say", "incorrectPhonic"),
                then("say", "sound")
            ]}/>
    }
});

module.exports = Lesson13ActivityFeedback;