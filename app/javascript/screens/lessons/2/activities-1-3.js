var React        = require("react"),
    WordActivity = require("screens/activity/word"),
    render       = require("render"),
    lessonInfo   = require("./info");

var Lesson2Activity1to3 = React.createClass({
    mixins: [
        require("mixins/extend-sounds"), 
        require("mixins/storage")
    ],

    getAdditionalSounds: function() {
        return {
            "t":              "phonics/activity-phonics/t",
            "touch-the-word": "lessons/lesson-2/activities/instructions/touch-the-word"
        };
    },

    render: function() {
        var Feedback   = require("screens/activity-feedback/words"),
            choices    = this.props.choices,
            nextScreen = this.props.nextScreen,
            activityId = this.props.id;

        return (
            <WordActivity {...this.props}
                lessonId          = {lessonInfo.id}
                lessonTitle       = {lessonInfo.title}
                activityCount     = {lessonInfo.activityCount}
                sounds            = {this.getSounds()}
                autoplayAnimation = {this.props.autoplayAnimation || "instructions"}
                lessonScreen      = {require("screens/lessons/2")}

                onSubmit={(activity, correct) => {
                    this.save([lessonInfo.namespace, "activities", activityId, "correct"], correct);
                }}

                instructions={(then) => [
                    then("say", "touch-the-word"), then("wait", 250),
                    then("say", "t"),              then("wait", 250),

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
                            "doesnt-end": "lessons/lesson-2/activities/feedback/doesnt-end",
                            "ends-with":  "lessons/lesson-2/activities/feedback/ends-with",
                            "t":          "phonics/activity-phonics/t"
                        }}
                        correctAnimation={(then) => [
                            then("say", "words.0"),   then("wait", 250),
                            then("say", "ends-with"), then("wait", 250),
                            then("say", "t")
                        ]}
                        incorrectAnimation={(then) => [
                            then("say", "words.0"),    then("wait", 250),
                            then("say", "doesnt-end"), then("wait", 250),
                            then("say", "t")
                        ]}/>
                )}/>
        );
    }
});

module.exports = Lesson2Activity1to3;