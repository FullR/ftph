"use strict";

var React = require("react"),
	Feedback = require("./feedback.jsx"),
	AttemptContainer = require("./attempt-container.jsx");

var Activity = React.createClass({
	render: function() {
		var activity = this.props.activity,
			attempt = activity.getCurrentAttempt();

		return attempt.isComplete() ? 
			<Feedback activity={activity}/> :
			<AttemptContainer attempt={attempt} />
	}
});

module.exports = Activity;