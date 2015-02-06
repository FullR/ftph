"use strict";

var React        = require("react"),
    WordActivity = require("screens/activity/word"),
    get          = require("utility/functional/get"),
    render       = require("render"),
    lessonInfo   = require("./info");

var Lesson5Activity = React.createClass({
    mixins: [
        require("mixins/extend-sounds"), 
        require("mixins/storage")
    ],

    getAdditionalSounds: function() {
        return {
            "touch-the": "assets/audio/lessons/lesson-5/activities/instructions/touch-the"
        };
    },

    componentWillMount: function() {
        this.save([lessonInfo.namespace, "last-screen"], this.props.id);
    },

    render: function() {
        var choices    = this.props.choices,
            nextScreen = this.props.nextScreen,
            activityId = this.props.id;

        return (
            <WordActivity {...this.props}
                requiredSelectionCount = {2}
                autoplayAnimation      = {this.props.autoplayAnimation || "choices-only"}
                lessonId               = {lessonInfo.id}
                section                = {lessonInfo.section}
                lessonTitle            = {lessonInfo.title}
                activityCount          = {lessonInfo.activityCount}
                sounds                 = {this.getSounds()}
                lessonScreen           = {require("screens/lessons/5")}

                onSubmit={(activity, correct) => {
                    this.save(["lesson-5", "activities", activityId, "correct"], correct);
                }}

                instructions={function(then) {
                    return [
                        then("say", "touch-the"),     then("wait", 250),

                        then("uncenterActor"),
                        then("revealChoice", 0),
                        then("say", choices[0].word), then("wait", 250),

                        then("revealChoice", 1),
                        then("say", choices[1].word), then("wait", 250),

                        then("revealChoice", 2),
                        then("say", choices[2].word), then("wait", 250),

                        then("sit")
                    ];
                }}

                renderFeedback={function(activity) {
                    var Feedback = require("screens/activity-feedback/multi-word"),
                        selectedWords = activity.getSelected().map(get("word")),
                        feedback = (
                            <Feedback
                                lessonId      = {lessonInfo.id}
                                lessonTitle   = {lessonInfo.title}
                                activityId    = {activityId}
                                activityCount = {lessonInfo.activityCount}
                                section       = {lessonInfo.section}
                                correct       = {activity.isCorrect()}
                                nextScreen    = {nextScreen}
                                words         = {selectedWords}
                                sounds={{
                                    "rhymes-with":    "assets/audio/lessons/lesson-5/activities/feedback/rhymes-with",
                                    "does-not-rhyme": "assets/audio/lessons/lesson-5/activities/feedback/does-not-rhyme",

                                    "selected-1":     "assets/audio/words/activity-words/"+selectedWords[0],
                                    "selected-2":     "assets/audio/words/activity-words/"+selectedWords[1]
                                }}
                                correctAnimation={function(then) {
                                    return [
                                        then("say", "selected-1"),  then("wait", 250),
                                        then("say", "rhymes-with"), then("wait", 250),
                                        then("say", "selected-2"),  then("wait", 250)
                                    ];
                                }}
                                incorrectAnimation={function(then) {
                                    return [
                                        then("say", "selected-1"),     then("wait", 250),
                                        then("say", "does-not-rhyme"), then("wait", 250),
                                        then("say", "selected-2"),     then("wait", 250),
                                    ];
                                }}/>
                        );

                    render(feedback);
                }}/>
        );
    }
});

module.exports = Lesson5Activity;