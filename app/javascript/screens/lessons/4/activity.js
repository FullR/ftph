var React        = require("react"),
    WordActivity = require("screens/activity/word"),
    WordImage    = require("components/game-screen/word-image"),
    render       = require("render"),
    lessonInfo   = require("./info");

var Lesson4Activity = React.createClass({
    mixins: [
        require("mixins/extend-sounds"), 
        require("mixins/storage")
    ],

    getAdditionalSounds: function() {
        return {
            "rhyme-word": `words/activity-words/${this.props.word}`,
            "touch-the":  "lessons/lesson-4/activities/instructions/touch-the"
        };
    },

    render: function() {
        var choices    = this.props.choices,
            nextScreen = this.props.nextScreen,
            activityId = this.props.id,
            rhymeWord  = this.props.word;

        return (
            <WordActivity {...this.props}
                lessonId      = {lessonInfo.id}
                section       = {lessonInfo.section}
                className     = "lesson-4-activity"
                lessonTitle   = {lessonInfo.title}
                activityCount = {lessonInfo.activityCount}
                sounds        = {this.getSounds()}
                lessonScreen  = {require("screens/lessons/4")}

                onSubmit={(activity, correct) => {
                    this.save([lessonInfo.namespace, "activities", activityId, "correct"], correct);
                }}

                instructions={(then) => [
                    then("uncenterActor"),
                    then("say", "touch-the"),     then("wait", 250),
                    then("say", "rhyme-word"),    then("wait", 250),

                    choices.map((choice, i) => [
                        then("revealChoice", i),
                        then("say", ["words", i]),
                        then("wait", 250)
                    ]),

                    then("sit")
                ]}

                renderFeedback={(activity) => {
                    var Feedback = require("screens/activity-feedback/words"),
                        correct = activity.isCorrect(),
                        selected = activity.getSelected(),
                        feedback = (
                            <Feedback
                                lessonId      = {lessonInfo.id}
                                lessonTitle   = {lessonInfo.title}
                                activityId    = {activityId}
                                activityCount = {lessonInfo.activityCount}
                                section       = {lessonInfo.section}
                                correct       = {correct}
                                nextScreen    = {nextScreen}
                                words         = {[activity.getSelected()[0].word]}

                                sounds={{
                                    "does-not":   "lessons/lesson-4/activities/feedback/does-not",
                                    "rhyme":      "lessons/lesson-4/activities/feedback/rhyme",
                                    "rhyme-word": `words/activity-words/${rhymeWord}`
                                }}

                                correctAnimation={(then) => [
                                    then("say", "words.0"),   then("wait", 250),
                                    then("say", "rhyme"),     then("wait", 250),
                                    then("say", "rhyme-word")
                                ]}

                                incorrectAnimation={(then) => [
                                    then("say", "words.0"),   then("wait", 250),
                                    then("say", "does-not"),  then("wait", 250),
                                    then("say", "rhyme-word")
                                ]}/>
                        );

                    render(feedback);
                }}>
                    <div className='lesson-4-activity__rhyme-word'>
                        <WordImage word={this.props.word} disableHCenter={true}/>
                    </div>
                </WordActivity>
        );
    }
});

module.exports = Lesson4Activity;