var React        = require("react"),
    WordActivity = require("screens/activity/word"),
    render       = require("render"),
    lessonInfo   = require("./info");

var Lesson2Activity4to15 = React.createClass({
    mixins: [
        require("mixins/extend-sounds"),
        require("mixins/storage")
    ],

    getAdditionalSounds: function() {
        return {
            "word1":            `words/activity-words/${this.props.word1}`,
            "word2":            `words/activity-words/${this.props.word2}`,
            "touch-same-sound": "lessons/lesson-2/activities/instructions/touch-same-sound",
            "and":              "common/activities/and"
        };
    },

    // On mount, set lesson 2 last lesson and
    // the current activity's sublesson last lesson
    componentWillMount: function() {
        var sublessonNamespace = `lesson-2-${this.props.phonic}`;
        this.save([sublessonNamespace, "last-screen"], this.props.id);
    },

    render: function() {
        var Feedback   = require("screens/activity-feedback/words"),
            choices    = this.props.choices,
            nextScreen = this.props.nextScreen,
            activityId = this.props.id,
            word1      = this.props.word1,
            word2      = this.props.word2;

        return (
            <WordActivity {...this.props}
                lessonId      = {lessonInfo.id}
                lessonTitle   = {lessonInfo.title}
                activityCount = {lessonInfo.activityCount}
                sounds        = {this.getSounds()}
                lessonScreen  = {this.props.lessonScreen}

                onSubmit={(activity, correct) =>
                    this.save([lessonInfo.namespace, "activities", activityId, "correct"], correct)
                }

                instructions={(then) => [
                    then("say", "touch-same-sound"), then("wait", 250),
                    then("say", "word1"),            then("wait", 250),
                    then("say", "and"),              then("wait", 250),
                    then("say", "word2"),            then("wait", 250),

                    then("uncenterActor"),

                    choices.map((choice, index) => [
                        then("revealChoice", index),
                        then("say", ["words", index]),
                        then("wait", 250),
                    ]),

                    then("sit")
                ]}

                renderFeedback={(activity) => render(
                    <Feedback
                        lessonId      = {lessonInfo.id}
                        lessonTitle   = {lessonInfo.title}
                        activityId    = {activityId}
                        activityCount = {lessonInfo.activityCount}
                        section       = {lessonInfo.section}
                        correct       = {activity.isCorrect()}
                        nextScreen    = {nextScreen}
                        words         = {[activity.getSelected()[0].word]}
                        sounds={{
                            "word1":           `words/activity-words/${word1}`,
                            "word2":           `words/activity-words/${word2}`,
                            "doesnt-end-same": "lessons/lesson-2/activities/feedback/doesnt-end-same",
                            "ends-with-same":  "lessons/lesson-2/activities/feedback/ends-with-same",
                            "and":             "common/activities/and"
                        }}

                        correctAnimation={(then) => [
                            then("say", "words.0"),        then("wait", 250),
                            then("say", "ends-with-same"), then("wait", 250),
                            then("say", "word1"),          then("wait", 250),
                            then("say", "and"),            then("wait", 250),
                            then("say", "word2")
                        ]}

                        incorrectAnimation={(then) => [
                            then("say", "words.0"),         then("wait", 250),
                            then("say", "doesnt-end-same"), then("wait", 250),
                            then("say", "word1"),           then("wait", 250),
                            then("say", "and"),             then("wait", 250),
                            then("say", "word2")
                        ]}/>
                )}/>
        );
    }
});

module.exports = Lesson2Activity4to15;