var React = require("react");

/*
    Example:
        Lesson {lessonId}: {lessonTitle}
        Activity {activityId} of {activityCount}
*/
var Info = React.createClass({
    render: function() {
        return (
            <div className="info">
                Lesson <span className="info__lesson-id">{this.props.lessonId}</span>: <span className="info__lesson-title">{this.props.lessonTitle}</span><br/>
                Activity <span className="info__activity-id">{this.props.activityId}</span> of {this.props.activityCount}
            </div>
        );
    }
});

module.exports = Info;