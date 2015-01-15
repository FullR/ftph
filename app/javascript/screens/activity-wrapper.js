"use strict";

var React         = require("react"),
    _             = require("lodash"),
    activityIndex = require("screens/lessons/activity-index"),
    AdminButton   = require("components/admin-button");

var ActivityWrapper = React.createClass({
    getCornerInfo: function() {
        return (
            <div className='corner-info'>
                Lesson <span className='corner-info-lesson-id'>{this.props.lessonId}</span>: <span className='corner-info-lesson-title'>{this.props.lessonInfo.cornerTitle || this.props.lessonInfo.title}</span><br/>
                Activity <span className='corner-info-activity-id'>{this.props.activityId}</span> of {_.values(activityIndex[this.props.lessonId]).length}
            </div>
        );
    },

    render: function() {
        var activityComponents = activityIndex[this.props.lessonId],
            Activity = activityComponents[this.props.activityId];

        return (
            <div className='activity-wrapper'>              
                <Activity {...this.props} />
                <AdminButton />
                {this.getCornerInfo()}
            </div>
        );
    }
});

module.exports = ActivityWrapper;