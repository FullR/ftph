var React        = require("react"),
    WordActivity = require("screens/activity/word"),
    WordImage    = require("components/game-screen/word-image"),
    render       = require("render"),
    lessonInfo   = require("./info");

var Lesson6Activity = React.createClass({
    mixins: [
        require("mixins/extend-sounds"), 
        require("mixins/storage")
    ],

    getAdditionalSounds: function() {
        return {
            "listen": "lessons/lesson-6/activities/instructions/listen",
            "phonics": this.props.phonics.map((phonic) => "phonics/activity-phonics/"+phonic)
        };
    },

    render: function() {
        var choices           = this.props.choices,
            nextScreen        = this.props.nextScreen,
            activityId        = this.props.id,
            rhymeWord         = this.props.word,
            correctAnimation  = this.props.correctAnimation,
            incorrectFeedback = this.props.incorrectFeedback,
            choices           = this.props.choices,
            phonics           = this.props.phonics;

        return (
            <WordActivity {...this.props}
                lessonId      = {lessonInfo.id}
                section       = {lessonInfo.section}
                lessonTitle   = {lessonInfo.title}
                activityCount = {lessonInfo.activityCount}
                sounds        = {this.getSounds()}

                onSubmit={(activity, correct) => {
                    this.save([lessonInfo.namespace, "activities", activityId, "correct"], correct);
                }}

                instructions={(then) => [
                    then("say", "listen"),
                    then("wait", 250),
                    
                    ...phonics.map((phonic, index) => 
                        then("say", ["phonics", index])
                    ),

                    then("wait", 250),
                    then("uncenterActor"),
                    
                    ...choices.map((choice, index) => [
                        then("revealChoice", index),
                        then("say", ["words", index]),
                        then("wait", 250)
                    ]),

                    then("sit")
                ]}

                renderFeedback={(activity) => {
                    var Feedback = require("screens/activity-feedback/words"),
                        correct  = activity.isCorrect(),
                        selected = activity.getSelected()[0];

                    render(
                        <Feedback
                            lessonId      = {lessonInfo.id}
                            lessonTitle   = {lessonInfo.title}
                            activityId    = {activityId}
                            activityCount = {lessonInfo.activityCount}
                            section       = {lessonInfo.section}
                            correct       = {correct}
                            nextScreen    = {nextScreen}
                            words         = {[selected.word]}

                            sounds={{
                                "phonics": phonics.map((phonic) => 
                                    `phonics/activity-phonics/${phonic}`
                                ),
                                "correct-word":      `lessons/lesson-6/activities/feedback/correct/${phonics.join("_")}`,
                                "word":              `words/activity-words/${selected.word}`,

                                "sound":             "common/activities/sound",
                                "doesnt-have-the":   "lessons/lesson-6/activities/feedback/doesnt-have-the",
                                "doesnt-begin-with": "lessons/lesson-6/activities/feedback/doesnt-begin-with",
                                "doesnt-end-with":   "lessons/lesson-6/activities/feedback/doesnt-end-with",
                                "or-end-with":       "lessons/lesson-6/activities/feedback/or-end-with",
                                "or-begin-with":     "lessons/lesson-6/activities/feedback/or-begin-with"
                            }}

                            correctAnimation={(then) => [
                                then("say", "correct-word"),
                                then("wait", 250),
                                then("say", "words.0")
                            ]}

                            incorrectAnimation={function(then) {
                                console.log("Running incorrect feedback");
                                try {
                                    return incorrectFeedback(then, selected.word);
                                }
                                catch(err) {
                                    console.log(err);
                                }
                            }}/>
                    );
                }}/>
        );
    }
});

module.exports = Lesson6Activity;