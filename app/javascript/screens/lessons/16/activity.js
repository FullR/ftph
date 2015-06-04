var React = require("react");
var ShortSoundActivity = require("screens/activity/short-sound");
var Feedback = require("./activity-feedback");
var lessonInfo = require("./info");
var render = require("render");

var Lesson16Activity = React.createClass({
    mixins: [require("mixins/storage")],

    render: function() {
        var activityId = this.props.id;
        var nextScreen = this.props.nextScreen;
        var choices = this.props.choices;

        return (
            <ShortSoundActivity {...this.props}
                phonic={lessonInfo.phonic}
                letter={lessonInfo.letter}
                id={activityId}
                lessonId={lessonInfo.id}
                lessonTitle={lessonInfo.title}
                section={lessonInfo.section}
                activityCount={lessonInfo.activityCount}
                lessonScreen={require("screens/lessons/16")}
                autoplayAnimation={this.props.autoplayAnimation || "choices-only"}
                namespace={lessonInfo.namespace}
                renderFeedback={(activity) => render(
                    <Feedback
                        letter={lessonInfo.letter}
                        correct={activity.isCorrect()}
                        activityId={activityId}
                        nextScreen={nextScreen}
                        removedPhonic={this.props.removedPhonic}
                        addedPhonic={this.props.addedPhonic}
                        targetWord={this.props.targetWord}
                        words={activity.getSelected().map((choice) => choice.word)}/>
                )}/>
        );
    }
});

module.exports = Lesson16Activity;