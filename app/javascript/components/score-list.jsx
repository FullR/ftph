"use strict";

var React = require("react");

var Score = React.createClass({
	render: function() {
		var attempt = this.props.attempt;

		return (
			<div key={attempt.id} className='score'>
				<div className='score-text'>{attempt.review ? "Game Score" : "Replay Incorrect Score"}</div>
				<div className='score-amount'>{attempt.getScore() + "/" + attempt.getCount()}</div>
				<div className='score-percent'>{attempt.getScorePercent()}%</div>
			</div>
		);
	}
});

var ScoreList = React.createClass({
	render: function() {
		var activity = this.props.activity,
			attempts = activity.attempts,
			bestAttempt = activity.getBestAttempt();

		var scores = attempts.map(function(attempt) {
			return <Score attempt={attempt} />
		});

		return (
			<div className='score-list'>
				<div className='scores'>
					{scores}
				</div>
				<div className='highscore'>
					<Score attempt={bestAttempt} />
				</div>
			</div>
		);
	}
});

module.exports = ScoreList;