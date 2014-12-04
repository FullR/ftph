"use strict";

var React            = require("react"),
	Feedback         = require("components/screens/feedback.jsx"),
	soundManager     = require("sound/sound-manager"),
	AttemptContainer = require("components/screens/attempt-container.jsx");

var Activity = React.createClass({
	
	getAttempt: function() {
		return this.props.activity.attempts[this.props.activity.attempts.length-1];
	},

	isComplete: function() {
		return this.getAttempt().unused.length === 0;
	},

	render: function() {
		var complete = this.isComplete();

		if(complete) {
			soundManager.stop();
		}

		return complete ? 
			<Feedback activity={this.props.activity} id={this.props.id}/> :
			<AttemptContainer attempt={this.getAttempt()} id={this.props.id}/>
	}
});

module.exports = Activity;