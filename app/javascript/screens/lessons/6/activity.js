"use strict";

var React        = require("react"),
    WordActivity = require("screens/activity/word"),
    WordImage    = require("components/word-image"),
    render       = require("render"),
    lessonInfo   = require("./info");

var Lesson4Activity = React.createClass({
    mixins: [
        require("mixins/extend-sounds"), 
        require("mixins/storage")
    ],

    getAdditionalSounds: function() {
        return {
            "listen": "assets/audio/lessons/lesson-6/activities/instructions/listen",
            "phonics": this.props.phonics.map((phonic) => "assets/audio/phonics/activity-phonics/"+phonic)
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
                className     = "lesson-4-activity"
                lessonTitle   = {lessonInfo.title}
                activityCount = {lessonInfo.activityCount}
                sounds        = {this.getSounds()}
                lessonScreen  = {require("screens/lessons/4")}

                onSubmit={(activity, correct) => {
                    this.save([lessonInfo.namespace, "activities", activityId, "correct"], correct);
                }}

                instructions={(then) => [
                    then("say", "listen"),

                    phonics.map((phonic, index) => then("say", ["phonics", index])),

                    then("wait", 250),
                    then("uncenterActor"),
                    
                    choices.map((choice, index) => [
                        then("revealChoice", index),
                        then("say", ["words", index]),
                        then("wait", 250)
                    ]),

                    then("sit")
                ]}

                renderFeedback={function(activity) {
                    var Feedback = require("screens/activity-feedback/single-word"),
                        correct  = activity.isCorrect(),
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
                                word          = {activity.getSelected()[0].word}

                                sounds={{
                                    "phonics": phonics.map((phonic) => "assets/audio/phonics/activity-phonics/"+phonic),
                                    "word": "assets/audio/words/activity-words/"+selected.word,

                                    "sound": "assets/audio/common/activities/sound",
                                    "sounds": "assets/audio/common/activities/sounds",
                                    "and": "assets/audio/common/activities/and",
                                    "or": "assets/audio/common/activities/or",
                                    "an": "assets/audio/common/activities/an",
                                    "a": "assets/audio/common/activities/a",

                                    "doesnt-have": "assets/audio/lessons/lesson-6/activities/feedback/doesnt-have",
                                    "doesnt-begin-with": "assets/audio/lessons/lesson-6/activities/feedback/doesnt-begin-with",
                                    "doesnt-end-with": "assets/audio/lessons/lesson-6/activities/feedback/doesnt-end-with",
                                }}

                                correctAnimation={(then) => [
                                    phonics.map((phonic, index) => then("say", ["phonics", index])),
                                    then("wait", 250),
                                    then("say", "word")
                                ]}

                                incorrectAnimation={function(then) {
                                    return incorrectFeedback(then, selected.word);
                                }}/>
                        );

                    render(feedback);
                }}/>
        );
    }
});

module.exports = Lesson4Activity;