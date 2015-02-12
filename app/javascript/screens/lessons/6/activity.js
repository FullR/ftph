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
            "listen": "lessons/lesson-6/activities/instructions/listen",
            "phonics": this.props.phonics.map((phonic) => "phonics/activity-phonics/"+phonic)
        };
    },

    componentWillMount: function() {
        this.save([lessonInfo.namespace, "last-screen"], this.props.id);
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
                                "word":              `words/activity-words/${selected.word}`,
                                "sound":             "common/activities/sound",
                                "sounds":            "common/activities/sounds",
                                "and":               "common/activities/and",
                                "or":                "common/activities/or",
                                "an":                "common/activities/an",
                                "a":                 "common/activities/a",
                                "doesnt-have":       "lessons/lesson-6/activities/feedback/doesnt-have",
                                "doesnt-have-a":       "lessons/lesson-6/activities/feedback/doesnt-have-a",
                                "doesnt-have-an":       "lessons/lesson-6/activities/feedback/doesnt-have-an",
                                "doesnt-begin-with": "lessons/lesson-6/activities/feedback/doesnt-begin-with",
                                "doesnt-end-with":   "lessons/lesson-6/activities/feedback/doesnt-end-with"
                            }}

                            correctAnimation={(then) => [
                                ...phonics.map((phonic, index) => 
                                    then("say", ["phonics", index])
                                ),
                                then("wait", 250),
                                then("say", "words.0")
                            ]}

                            incorrectAnimation={function(then) {
                                return incorrectFeedback(then, selected.word);
                            }}/>
                    );
                }}/>
        );
    }
});

module.exports = Lesson4Activity;