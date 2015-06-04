var React = require("react");
var WordActivity = require("screens/activity/word");
var Feedback = require("./activity-feedback-15-30");
var lessonInfo = require("./info");
var render = require("render");

var Lesson14Activity = React.createClass({
    mixins: [require("mixins/storage")],

    render: function() {
        var activityId = this.props.id;
        var nextScreen = this.props.nextScreen;
        var choices = this.props.choices;
        var letter = this.props.letter;

        return (
            <WordActivity {...this.props}
                id={activityId}
                lessonId={lessonInfo.id}
                lessonTitle={lessonInfo.title}
                section={lessonInfo.section}
                activityCount={lessonInfo.activityCount}
                lessonScreen={require("screens/lessons/20")}
                autoplayAnimation={this.props.autoplayAnimation || "instructions"}
                sounds={{
                    "letter": `common/activities/letters/${this.props.letter}`,
                    "say-the": "lessons/lesson-20/activity/say-the"
                }}
                instructions={(then) => [
                    then("uncenterActor"),
                    then("say", "say-the"),
                    then("say", "letter"),
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
                        correct={activity.isCorrect()}
                        letter={letter}
                        activityId={activityId}
                        nextScreen={nextScreen}
                        correctWord={this.props.choices.filter((choice) => choice.correct)[0].word}/>
                )}>
                    <div className="center-word" style={{fontSize: 200, textAlign: "center"}}>
                        {this.props.letter}
                    </div>
                </WordActivity>
        );
    }
});

module.exports = Lesson14Activity;
