var React = require("react"),
    ShortSoundFeedback = require("screens/activity-feedback/short-sound"),
    info = require("./info");

var Lesson15ActivityFeedback = React.createClass({
    render: function() {
        return (
            <ShortSoundFeedback {...this.props}
                phonic={info.phonic}
                letter={info.letter}
                lessonId={info.id}
                lessonTitle={info.title}
                activityCount={info.activityCount}
                section={info.section}/>
        );
    }
});

module.exports = Lesson15ActivityFeedback;