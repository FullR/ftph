var React = require("react");
var WordActivity = require("screens/activity/word");
var Feedback = require("./activity-feedback");
var lessonInfo = require("./info");
var render = require("render");
var WordImage = require("components/game-screen/word-image");

var Lesson14Activity = React.createClass({
    mixins: [require("mixins/storage")],

    render: function() {
        var activityId = this.props.id;
        var nextScreen = this.props.nextScreen;
        var choices = this.props.choices;

        return (
            <WordActivity {...this.props}
                id={activityId}
                lessonId={lessonInfo.id}
                lessonTitle={lessonInfo.title}
                section={lessonInfo.section}
                activityCount={lessonInfo.activityCount}
                lessonScreen={require("screens/lessons/14")}
                autoplayAnimation={this.props.autoplayAnimation || "instructions"}
                sounds={{
                    "removed-phonic": `phonics/activity-phonics/${this.props.removedPhonic}`,
                    "added-phonic": `phonics/activity-phonics/${this.props.addedPhonic}`,
                    "target-word": `words/activity-words/${this.props.targetWord}`,
                    "take-out": "lessons/lesson-14/activity/take-out",
                    "sound-from": "lessons/lesson-14/activity/sound-from",
                    "and-put": "lessons/lesson-14/activity/and-put",
                    "sound": "lessons/lesson-14/activity/sound",
                    "what-is": "lessons/lesson-14/activity/what-is"
                }}
                instructions={(then) => [
                    then("uncenterActor"),
                    then("say", "take-out"),
                    then("say", "removed-phonic"),
                    then("say", "sound-from"),
                    then("say", "target-word"),
                    then("say", "and-put"),
                    then("say", "added-phonic"),
                    then("say", "sound"),
                    then("say", "what-is"),
                    then("wait", 250),
                    ...choices.map((choice, index) => [
                        then("revealChoice", index),
                        then("say", ["words", index]),
                        then("wait", 250)
                    ]),
                    then("sit")
                ]}
                renderFeedback={(activity) => render(
                    <Feedback
                        correct={activity.isCorrect()}
                        activityId={activityId}
                        nextScreen={nextScreen}
                        removedPhonic={this.props.removedPhonic}
                        addedPhonic={this.props.addedPhonic}
                        targetWord={this.props.targetWord}
                        words={activity.getSelected().map((choice) => choice.word)}
                        correctWord={this.props.choices.filter((choice) => choice.correct)[0].word}/>
                )}>
                    <div className="center-word">
                        <WordImage word={this.props.targetWord} disableHCenter={true}/>
                    </div>
                </WordActivity>
        );
    }
});

module.exports = Lesson14Activity;
