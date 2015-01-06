"use strict";

var React       = require("react"),
	LessonIndex = require("screens/lessons/lesson-index"),
	AdminButton = require("components/admin-button");

var LessonWrapper = React.createClass({
	render: function() {
		var Lesson = LessonIndex[this.props.lessonId];
		return (
			<div className='lesson-wrapper'>
				<div className='top-info'>
					<h1>{this.props.title}</h1>
					<h2>{this.props.subtitle || ("Lesson " + this.props.lessonId)}</h2>
				</div>
				<Lesson />
				<AdminButton />
			</div>
		);
	}
});

module.exports = LessonWrapper;