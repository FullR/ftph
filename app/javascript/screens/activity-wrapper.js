"use strict";

var React = require("react"),
	activityIndex = require("./lessons/activity-index"),
	AdminButton = require("components/admin-button");

var ActivityWrapper = React.createClass({
	shouldComponentUpdate: function() {
		return true;
	},
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