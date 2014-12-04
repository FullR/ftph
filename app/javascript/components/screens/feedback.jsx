"use strict";

var React      = require("react"),
	ScoreList  = require("components/score-list.jsx"),
	Link       = require("components/utility/link.jsx"),
	dispatcher = require("dispatcher");

var Feedback = React.createClass({
	getCurrentAttempt: function() {
		return this.props.activity.attempts[this.props.activity.attempts.length-1];
	},

	canReview: function() {
		return this.getCurrentAttempt().used.some(function(choice) {
			return !choice.correct;
		});
	},

	getTitle: function() {
		var titleEnd;
		switch(this.getCurrentAttempt().wordType) {
			case "prefix": titleEnd = (<span className='prefix'>Prefixes</span>); break;
			case "root": titleEnd = (<span className='root'>Roots</span>);        break;
			case "suffix": titleEnd = (<span className='suffix'>Suffixes</span>); break;
			case 2: titleEnd = (<span>Two Word Parts</span>);                                  break;
			case 3: titleEnd = (<span>Three Word Parts</span>);                                break;
		}

		return <span>Game {this.props.id} - {titleEnd} Completed</span>;
	},

	replay: function() {
		dispatcher.send("replay", this.props.activity);
	},

	review: function() {
		dispatcher.send("replay", this.props.activity, true);
	},

	nextActivity: function() {
		var id = +this.props.id;

		if(id < 10) {
			Link.to("activity/"+(id+1));
		}
	},

	goHome: function() {
		Link.to("menu");
	},

	render: function() {
		return (
			<div className='feedback'>
				<h1>{this.getTitle()}</h1>
				<ScoreList attempts={this.props.activity.attempts}>
					<div className='most-recent-mark'>Most Recent &gt;</div>
				</ScoreList>

				<div className='feedback-buttons'>
					{this.canReview() ? <button onClick={this.review}>Replay Incorrect</button> : null}
					<button onClick={this.replay}>Replay</button>
					<button onClick={this.nextActivity}>Next Game</button>
				</div>

				<div onClick={this.goHome} className='attempt-home-button' />
			</div>
		);
	}
});

module.exports = Feedback;