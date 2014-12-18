"use strict";

var React = require("react"),
	LessonIndex = require("screens/lessons/lesson-index");

var LessonWrapper = React.createClass({
	render: function() {
		var Lesson = LessonIndex[this.props.lessonId];
		return (
			<div className='lesson-wrapper'>
				<Lesson />
			</div>
		);
	}
});

module.exports = LessonWrapper;