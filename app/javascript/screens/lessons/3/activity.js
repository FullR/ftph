var React        = require("react"),
    WordActivity = require("screens/activity/word"),
    get          = require("utility/functional/get"),
    render       = require("render"),
    lessonInfo   = require("./info");

var Lesson3Activity = React.createClass({
    mixins: [
        require("mixins/extend-sounds"), 
        require("mixins/storage")
    ],

    getAdditionalSounds: function() {
        var sounds = {};

        if(this.props.ending) {
            sounds.touch = "lessons/lesson-3/activities/instructions/ends";
            if(this.props.instroduceEnding) {
                sounds["now-listen"] = "lessons/lesson-3/activities/instructions/now-listen";
            }
        }
        else {
            sounds.touch = "lessons/lesson-3/activities/instructions/begins";
        }

        return sounds;
    },

    render: function() {
        var choices          = this.props.choices,
            nextScreen       = this.props.nextScreen,
            activityId       = this.props.id,
            ending           = this.props.ending,
            instroduceEnding = this.props.instroduceEnding;

        return (
            <WordActivity {...this.props}
                requiredSelectionCount = {2}
                lessonId               = {lessonInfo.id}
                section                = {lessonInfo.section}
                lessonTitle            = {lessonInfo.title}
                activityCount          = {lessonInfo.activityCount}
                sounds                 = {this.getSounds()}
                lessonScreen           = {require("screens/lessons/3")}

                onSubmit={(activity, correct) => {
                    this.save([lessonInfo.namespace, "activities", activityId, "correct"], correct);
                }}

                instructions={(then) => [
                    instroduceEnding ? 
                        [then("say", "now-listen"), then("wait", 250)] : 
                        [],

                    then("say", "touch"),
                    then("wait", 250),

                    then("uncenterActor"),

                    choices.map((choice, i) => [
                        then("revealChoice", i),
                        then("say", ["words", i]),
                        then("wait", 250),
                    ]),

                    then("sit")
                ]}

                renderFeedback={function(activity) {
                    var Feedback = require("screens/activity-feedback/words"),
                        feedback = (
                            <Feedback
                                lessonId      = {lessonInfo.id}
                                lessonTitle   = {lessonInfo.title}
                                activityId    = {activityId}
                                activityCount = {lessonInfo.activityCount}
                                section       = {lessonInfo.section}
                                correct       = {activity.isCorrect()}
                                nextScreen    = {nextScreen}
                                words         = {activity.getSelected().map(get("word"))}

                                sounds={{
                                    "do-not": ending ?
                                        "lessons/lesson-3/activities/feedback/do-not-end" :
                                        "lessons/lesson-3/activities/feedback/do-not-begin",

                                    "both": ending ?
                                        "lessons/lesson-3/activities/feedback/both-end" :
                                        "lessons/lesson-3/activities/feedback/both-begin",

                                    "and": "common/activities/and"
                                }}

                                correctAnimation={(then) => [
                                    then("say", "words.0"), then("wait", 250),
                                    then("say", "and"),     then("wait", 250),
                                    then("say", "words.1"), then("wait", 250),
                                    then("say", "both")
                                ]}

                                incorrectAnimation={(then) => [
                                    then("say", "words.0"), then("wait", 250),
                                    then("say", "and"),     then("wait", 250),
                                    then("say", "words.1"), then("wait", 250),
                                    then("say", "do-not")
                                ]}/>
                        );

                    render(feedback);
                }}/>
        );
    }
});

module.exports = Lesson3Activity;