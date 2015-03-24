var React = require("react"),
    ShortVowelActivity = require("screens/activity/short-vowel"),
    ShortVowelFeedback = require("screens/activity-feedback/short-vowel"),
    lessonInfo = require("./info"),
    render = require("render");

var Lesson8Activity = React.createClass({
    mixins: [require("mixins/storage")],

    render: function() {
        var activityId = this.props.id,
            nextScreen = this.props.nextScreen;

        return (
            <ShortVowelActivity {...this.props}
                phonic={lessonInfo.phonic}
                id={activityId}
                lessonId={lessonInfo.id}
                lessonTitle={lessonInfo.title}
                section={lessonInfo.section}
                activityCount={lessonInfo.activityCount}
                lessonScreen={require("screens/lessons/11")}
                autoplayAnimation={this.props.autoplayAnimation || "choices-only"}
                onSubmit={(activity, correct) => 
                    this.save([lessonInfo.namespace, "activities", activityId, "correct"], correct)
                }
                renderFeedback={(activity) => render(
                    <ShortVowelFeedback
                        phonic={lessonInfo.phonic}
                        lessonId={lessonInfo.id}
                        lessonTitle={lessonInfo.title}
                        activityId={activityId}
                        activityCount={lessonInfo.activityCount}
                        section={lessonInfo.section}
                        correct={activity.isCorrect()}
                        words={[activity.getSelected()[0].word]}
                        nextScreen={nextScreen}/>
                )}/>
        );
    }
});

module.exports = Lesson8Activity;