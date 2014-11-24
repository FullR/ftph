"use strict";

var React = require("react"),
	ScoreList = require("../score-list.jsx"),
	dispatcher = require("../../dispatcher");

var Feedback = React.createClass({
	getCurrentAttempt: function() {
		return this.props.activity.attempts[this.props.activity.attempts.length-1];
	},

	canReview: function() {
		return this.getCurrentAttempt().used.some(function(choice) {
			return !choice.correct;
		});
	},

	replay: function() {
		dispatcher.send("replay", this.props.activity);
	},

	review: function() {
		dispatcher.send("replay", this.props.activity, true);
	},

	render: function() {
		return (
			<div className='feedback'>
				<ScoreList attempts={this.props.activity.attempts}/>

				<button onClick={this.replay}>Replay</button>
				{this.canReview() ? <button onClick={this.review}>Replay Incorrect</button> : null}
				<button>Next Game</button>
			</div>
		);
	}
});

module.exports = Feedback;