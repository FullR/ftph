var React = require("react"),
    ShortVowelActivity = require("screens/activity/short-vowel"),
    ShortVowelFeedback = require("screens/activity-feedback/short-vowel"),
    lessonInfo = require("./info"),
    render = require("render");

var Lesson8Activity = React.createClass({
    mixins: [require("mixins/storage")],

    render: function() {
        var activityId = this.props.id;
        return (
            <ShortVowelActivity {...this.props}
                phonic="ah"
                id={activityId}
                lessonId={lessonInfo.id}
                lessonTitle={lessonInfo.title}
                section={lessonInfo.section}
                activityCount={lessonInfo.activityCount}
                lessonScreen={require("screens/lessons/8")}
                autoplayAnimation={this.props.autoplayAnimation || "choices-only"}
                onSubmit={(activity, correct) => 
                    this.save([lessonInfo.namespace, "activities", activityId, "correct"], correct)
                }
                renderFeedback={(activity) => render(
                    <ShortVowelFeedback
                        phonic="ah"
                        lessonId={lessonInfo.id}
                        lessonTitle={lessonInfo.title}
                        activityId={activityId}
                        activityCount={lessonInfo.activityCount}
                        section={lessonInfo.section}
                        correct={activity.isCorrect()}
                        words={[activity.getSelected()[0].word]}/>
                )}/>
        );
    }
});

module.exports = Lesson8Activity;