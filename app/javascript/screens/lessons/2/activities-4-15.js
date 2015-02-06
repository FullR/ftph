"use strict";

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
            "word1":            "assets/audio/words/activity-words/"+this.props.word1,
            "word2":            "assets/audio/words/activity-words/"+this.props.word2,
            "touch-same-sound": "assets/audio/lessons/lesson-2/activities/instructions/touch-same-sound",
            "and":              "assets/audio/common/and"
        };
    },

    componentWillMount: function() {
        var sublessonNamespace = "lesson-2-"+this.props.phonic;
        this.save([sublessonNamespace, "last-screen"], this.props.id);
        this.save([lessonInfo.namespace, "last-screen"], this.props.id);
    },

    render: function() {
        var choices    = this.props.choices,
            nextScreen = this.props.nextScreen,
            activityId = this.props.id,
            word1      = this.props.word1,
            word2      = this.props.word2;

        return (
            <WordActivity {...this.props}
                lessonId      = {lessonInfo.lessonId}
                lessonTitle   = {lessonInfo.title}
                activityCount = {lessonInfo.activityCount}
                sounds        = {this.getSounds()}
                lessonScreen  = {this.props.lessonScreen}

                onSubmit={(activity, correct) => {
                    this.save([lessonInfo.namespace, "activities", activityId, "correct"], correct);
                }}

                instructions={function(then) {
                    return [
                        then("say", "touch-same-sound"), then("wait", 250),
                        then("say", "word1"),            then("wait", 250),
                        then("say", "and"),              then("wait", 250),
                        then("say", "word2"),            then("wait", 250),

                        then("uncenterActor"),

                        // reveal/say choice 0
                        then("revealChoice", 0),
                        then("say", choices[0].word),    then("wait", 250),

                        // reveal/say choice 1
                        then("revealChoice", 1),
                        then("say", choices[1].word),    then("wait", 250),

                        // reveal/say choice 2
                        then("revealChoice", 2),
                        then("say", choices[2].word),    then("wait", 250),

                        then("sit")
                    ];
                }}

                renderFeedback={(activity) => {
                    var Feedback = require("screens/activity-feedback/single-word"),
                        feedback = (
                            <Feedback
                                lessonId      = {lessonInfo.lessonId}
                                lessonTitle   = {lessonInfo.title}
                                activityId    = {activityId}
                                activityCount = {lessonInfo.activityCount}
                                section       = {lessonInfo.section}
                                correct       = {activity.isCorrect()}
                                nextScreen    = {nextScreen}
                                word          = {activity.getSelected()[0].word}
                                sounds={{
                                    "doesnt-end-same": "assets/audio/lessons/lesson-2/activities/feedback/doesnt-end-same",
                                    "ends-with-same":  "assets/audio/lessons/lesson-2/activities/feedback/ends-with-same",
                                    "word1":           "assets/audio/words/activity-words/"+word1,
                                    "word2":           "assets/audio/words/activity-words/"+word2,
                                    "and":             "assets/audio/common/activities/and"
                                }}
                                correctAnimation={function(then) {
                                    return [
                                        then("say", "word"),           then("wait", 250),
                                        then("say", "ends-with-same"), then("wait", 250),
                                        then("say", "word1"),          then("wait", 250),
                                        then("say", "and"),            then("wait", 250),
                                        then("say", "word2")
                                    ];
                                }}
                                incorrectAnimation={function(then) {
                                    return [
                                        then("say", "word"),            then("wait", 250),
                                        then("say", "doesnt-end-same"), then("wait", 250),
                                        then("say", "word1"),           then("wait", 250),
                                        then("say", "and"),             then("wait", 250),
                                        then("say", "word2")
                                    ];
                                }}/>
                        );

                    render(feedback);
                }}/>
        );
    }
});

module.exports = Lesson2Activity4to15;