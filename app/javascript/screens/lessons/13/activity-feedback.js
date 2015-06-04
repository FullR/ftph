var React = require("react");
var WordFeedback = require("screens/activity-feedback/words");
var lessonInfo = require("./info");

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
                then("wait", 125),
                then("say", "makes-the"),
                then("wait", 125),
                then("say", "correctPhonic"),
                then("wait", 125),
                then("say", "sound"),
                then("wait", 250),
                then("say", ["incorrectWords", 0]),
                then("wait", 125),
                then("say", "and"),
                then("wait", 125),
                then("say", ["incorrectWords", 1]),
                then("wait", 200),
                then("say", "make-the"),
                then("wait", 125),
                then("say", "incorrectPhonic"),
                then("wait", 80),
                then("say", "sound")
            ]}

            incorrectAnimation={(then) => [
                then("say", ["incorrectWords", 0]),
                then("wait", 125),
                then("say", "and"),
                then("wait", 125),
                then("say", ["incorrectWords", 1]),
                then("wait", 125),
                then("say", "make-the-same"),
                then("wait", 125),
                then("say", "incorrectPhonic"),
                then("wait", 125),
                then("say", "sound")
            ]}/>
    }
});

module.exports = Lesson13ActivityFeedback;