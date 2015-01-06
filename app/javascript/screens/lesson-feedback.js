"use strict";

var React       = require("react"),
	_           = require("lodash"),
	Link        = require("components/utility/link"),
	AdminButton = require("components/admin-button");

var LessonFeedback = React.createClass({
	render: function() {
		var scores  = _.values(this.props.activities || []),
			score   = scores.filter(function(score) { return !!score; }).length,
			percent = Math.floor((score / scores.length) * 100),
			next    = this.props.next || "lesson/" + ((+this.props.id) + 1),
			prev	= this.props.prev || "lesson/" + this.props.id;

		return (
			<div className='lesson-feedback'>
				<h1>{this.props.title} Complete!</h1>
				<h2>Lesson {this.props.id}</h2>
				<p className='score'>
					Score {percent}%
					<br/>
					{score}/{scores.length}
				</p>
				{percent >= 85 ?
					<Link to={next} className='lesson-feedback-next'><button></button></Link> :
					<Link to={prev} className='lesson-feedback-prev'><button></button></Link>
				}
				<AdminButton />
			</div>
		);
	}
});

module.exports = LessonFeedback;