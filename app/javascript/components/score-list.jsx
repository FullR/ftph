"use strict";

var React = require("react"),
	attemptHelpers = require("../helpers/attempt");

var Score = React.createClass({
	mixins: [attemptHelpers.mixin],

	render: function() {
		var attempt = this.props.attempt,
			score   = this.getScore(),
			percent = this.getScorePercent(),
			count   = this.getCount();

		return (
			<div key={this.props.key} className='score-list-score'>
				<div className='score-list-score-text'>{this.props.children}</div>
				<div className='score-list-score-amount'>{score + "/" + count}</div>
				<div className='score-list-score-percent'>{percent}%</div>
			</div>
		);
	}
});


// Array.prototype.reduce alters the array (we don't want this)
function reverse(arr) {
	return arr.reduceRight(function(reversed, v) {
		reversed.push(v);
		return reversed;
	}, []);
}

var ScoreList = React.createClass({
	getBestAttempt: function() {
		return this.props.attempts.reduce(function(best, current) {
			return attemptHelpers.getScore(current) > attemptHelpers.getScore(best) ? current : best;
		});
	},

	render: function() {
		var attempts    = this.props.attempts,
			bestAttempt = this.getBestAttempt();

		var scores = reverse(attempts).map(function(attempt, i) {
			return <Score key={i} attempt={attempt}>{attempt.review ? "Replay Incorrect Score" : "Game Score"}</Score>
		});

		console.log(scores);

		return (
			<div className='score-list'>
				<div className='score-list-scores'>
					{scores}
				</div>
				<div className='score-list-highscore'>
					<Score attempt={bestAttempt}>High Score</Score>
				</div>
				{this.props.children}
			</div>
		);
	}
});

module.exports = ScoreList;