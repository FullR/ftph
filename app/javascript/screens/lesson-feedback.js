"use strict";

var React = require("react"),
	_ = require("lodash"),
	Link = require("components/utility/link");

var LessonFeedback = React.createClass({
	render: function() {
		var scores  = _.values(this.props.activities),
			score   = _.compact(scores).length,
			percent = Math.floor((score / scores.length) * 100),
			next    = (+this.props.id) + 1;
		return (
			<div className='lesson-feedback'>
				<p>Lesson feedback</p>
				<p>{percent}%</p>
				<p>{score} / {scores.length}</p>
				{percent >= 85 ?
					<Link to={"lesson/"+next}><button>Continue</button></Link> :
					null
				}
			</div>
		);
	}
});

module.exports = LessonFeedback;