var React = require("react");

/*
    Example:
        Lesson {lessonId}: {lessonTitle}
        Activity {activityId} of {activityCount}
*/
var Info = React.createClass({
    render: function() {
        return (
            <div className='corner-info'>
                Lesson <span className='corner-info-lesson-id'>{this.props.lessonId}</span>: <span className='corner-info-lesson-title'>{this.props.lessonTitle}</span><br/>
                Activity <span className='corner-info-activity-id'>{this.props.activityId}</span> of {this.props.activityCount}
            </div>
        );
    }
});

module.exports = Info;