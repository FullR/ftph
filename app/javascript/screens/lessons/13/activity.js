var React = require("react"),
    WordActivity = require("screens/activity/word"),
    Feedback = require("./activity-feedback"),
    lessonInfo = require("./info"),
    render = require("render");

var Lesson13Activity = React.createClass({
    mixins: [require("mixins/storage")],

    render: function() {
        var activityId = this.props.id,
            nextScreen = this.props.nextScreen,
            correctPhonic = this.props.correctPhonic,
            incorrectPhonic = this.props.incorrectPhonic,
            choices = this.props.choices;

        return (
            <WordActivity {...this.props}
                phonic={lessonInfo.phonic}
                id={activityId}
                lessonId={lessonInfo.id}
                lessonTitle={lessonInfo.title}
                section={lessonInfo.section}
                activityCount={lessonInfo.activityCount}
                lessonScreen={require("screens/lessons/13")}
                autoplayAnimation={this.props.autoplayAnimation || "choices-only"}
                onSubmit={(activity, correct) => 
                    this.save([lessonInfo.namespace, "activities", activityId, "correct"], correct)
                }
                sounds={{
                    "touch-the-word": "lessons/lesson-13/activities/instructions/touch-the-word"
                }}
                instructions={(then) => [
                    then("say", "touch-the-word"),
                    then("uncenterActor"),
                    ...choices.map((choice, index) => [
                        then("revealChoice", index),
                        then("say", ["words", index]),
                        then("wait", 250)
                    ]),
                    then("sit")
                ]}
                renderFeedback={(activity) => render(
                    <Feedback
                        activity={activity}
                        activityId={activityId}
                        nextScreen={nextScreen}
                        correctPhonic={correctPhonic}
                        incorrectPhonic={incorrectPhonic}/>
                )}/>
        );
    }
});

module.exports = Lesson13Activity;