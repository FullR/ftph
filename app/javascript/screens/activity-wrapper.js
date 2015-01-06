"use strict";

var React         = require("react"),
	_			  = require("lodash"),
	activityIndex = require("./lessons/activity-index"),
	AdminButton   = require("components/admin-button");

var ActivityWrapper = React.createClass({
	getCornerInfo: function() {
		return (
			<div className='corner-info'>
				Lesson {this.props.lessonId}: {this.props.lessonInfo.title}<br/>
				Activity {this.props.activityId} of {_.values(activityIndex[this.props.lessonId]).length}
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