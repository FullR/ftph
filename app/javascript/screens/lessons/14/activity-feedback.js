var React = require("react");
var WordFeedback = require("screens/activity-feedback/words");
var info = require("./info");

var Lesson14ActivityFeedback = React.createClass({
    render: function() {
        return (
            <WordFeedback {...this.props}
                lessonId={info.id}
                lessonTitle={info.title}
                activityCount={info.activityCount}
                section={info.section}
                sounds={{
                    "removed-phonic": `phonics/activity-phonics/${this.props.removedPhonic}`,
                    "added-phonic": `phonics/activity-phonics/${this.props.addedPhonic}`,
                    "target-word": `words/activity-words/${this.props.targetWord}`,
                    "correct-word": `words/activity-words/${this.props.correctWord}`,
                    "yes": "lessons/lesson-14/feedback/yes",
                    "if-you-take": "lessons/lesson-14/feedback/if-you-take",
                    "from": "lessons/lesson-14/activity/from",
                    "and-put-in": "lessons/lesson-14/feedback/and-put-in",
                    "sound": "lessons/lesson-14/activity/sound",
                    "the-new-word": "lessons/lesson-14/feedback/the-new-word"
                }}
                correctAnimation={(then) => [
                    then("say", "yes"),
                    then("say", "removed-phonic"),
                    then("say", "from"),
                    then("say", "target-word"),
                    then("say", "and-put-in"),
                    then("say", "added-phonic"),
                    then("say", "the-new-word"),
                    then("say", "correct-word")
                ]}
                incorrectAnimation={(then) => [
                    then("say", "if-you-take"),
                    then("say", "removed-phonic"),
                    then("say", "from"),
                    then("say", "target-word"),
                    then("say", "and-put-in"),
                    then("say", "added-phonic"),
                    then("say", "the-new-word"),
                    then("say", "correct-word")
                ]}/>
        );
    }
});

module.exports = Lesson14ActivityFeedback;
