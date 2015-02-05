"use strict";

var React        = require("react"),
    WordActivity = require("screens/activity/word"),
    get          = require("utility/functional/get"),
    render       = require("render");

var Lesson3Activity = React.createClass({
    mixins: [
        require("mixins/extend-sounds"), 
        require("mixins/storage")
    ],

    getAdditionalSounds: function() {
        var sounds = {};

        if(this.props.ending) {
            sounds.touch = "assets/audio/lessons/lesson-3/activities/instructions/ends";
            if(this.props.instroduceEnding) {
                sounds["now-listen"] = "assets/audio/lessons/lesson-3/activities/instructions/now-listen";
            }
        }
        else {
            sounds.touch = "assets/audio/lessons/lesson-3/activities/instructions/begins";
        }

        return sounds;
    },

    componentWillMount: function() {
        this.save("lesson-3.last-screen", this.props.id);
    },

    render: function() {
        var choices = this.props.choices,
            nextScreen = this.props.nextScreen,
            activityId = this.props.id,
            ending = this.props.ending,
            instroduceEnding = this.props.instroduceEnding;

        return (
            <WordActivity {...this.props}
                requiredSelectionCount={2}
                lessonId="3"
                section="1"
                lessonTitle="Beginning and Ending Sounds"
                activityCount="24"
                sounds={this.getSounds()}
                lessonScreen={require("screens/lessons/3")}

                onSubmit={(activity, correct) => {
                    this.save("lesson-3.activities."+activityId+".correct", correct);
                }}

                instructions={function(then) {
                    return [
                        instroduceEnding ? 
                            [then("say", "now-listen"), then("wait", 250)] : 
                            [],

                        then("say", "touch"), then("wait", 250),

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
                        feedback = (
                            <Feedback
                                lessonId="3"
                                lessonTitle="Beginning and Ending Sounds"
                                activityId={activityId}
                                activityCount="24"
                                section="1"
                                correct={activity.isCorrect()}
                                nextScreen={nextScreen}
                                words={activity.getSelected().map(get("word"))}
                                sounds={{
                                    "do-not": ending ?
                                        "assets/audio/lessons/lesson-3/activities/feedback/do-not-end" :
                                        "assets/audio/lessons/lesson-3/activities/feedback/do-not-begin",

                                    "both": ending ?
                                        "assets/audio/lessons/lesson-3/activities/feedback/both-end" :
                                        "assets/audio/lessons/lesson-3/activities/feedback/both-begin",

                                    "and": "assets/audio/common/activities/and"

                                }}
                                correctAnimation={function(then) {
                                    return [
                                        then("say", "word-0"), then("wait", 250),
                                        then("say", "and"), then("wait", 250),
                                        then("say", "word-1"), then("wait", 250),
                                        then("say", "both")
                                    ];
                                }}
                                incorrectAnimation={function(then) {
                                    return [
                                        then("say", "word-0"), then("wait", 250),
                                        then("say", "and"), then("wait", 250),
                                        then("say", "word-1"), then("wait", 250),
                                        then("say", "do-not")
                                    ];
                                }}/>
                        );

                    render(feedback);
                }}/>
        );
    }
});

module.exports = Lesson3Activity;