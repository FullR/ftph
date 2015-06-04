var React = require("react");
var ShortVowelActivity = require("screens/activity/short-vowel");
var ShortVowelFeedback = require("screens/activity-feedback/short-vowel");
var lessonInfo = require("./info");
var render = require("render");

var Lesson8Activity = React.createClass({
    mixins: [require("mixins/storage")],

    render: function() {
        var activityId = this.props.id;
        var nextScreen = this.props.nextScreen;

        return (
            <ShortVowelActivity {...this.props}
                phonic="ih"
                id={activityId}
                lessonId={lessonInfo.id}
                lessonTitle={lessonInfo.title}
                section={lessonInfo.section}
                activityCount={lessonInfo.activityCount}
                lessonScreen={require("screens/lessons/10")}
                autoplayAnimation={this.props.autoplayAnimation || "choices-only"}
                renderFeedback={(activity) => render(
                    <ShortVowelFeedback
                        phonic="ih"
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