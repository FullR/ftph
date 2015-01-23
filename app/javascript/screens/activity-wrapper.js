"use strict";

var React         = require("react"),
    _             = require("lodash"),
    activityIndex = require("screens/lessons/activity-index"),
    AdminButton   = require("components/admin-button");

var ActivityWrapper = React.createClass({
    render: function() {
        var activityComponents = activityIndex[this.props.lessonId],
            Activity = activityComponents[this.props.activityId];

        return (
            <div className='activity-wrapper'>
                <Activity />
                <AdminButton />
            </div>
        );
    }
});

module.exports = ActivityWrapper;