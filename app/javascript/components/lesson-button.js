"use strict";

var React = require("react");

function truthy(n) { return !!n; }

var LessonButton = React.createClass({
	render: function() {
		var classNames = [
			this.props.className,
			"lesson-button",
			this.props.active ? "lesson-button-active" : null,
			this.props.selected ? "lesson-button-prev" : null
		].filter(truthy).join(" ");

		var onClick = this.props.selectLesson ? this.props.selectLesson.bind(null, this.props.lesson) : null;

		return (
			<span className={classNames} to={'lesson/' + this.props.lesson} onClick={onClick}>
				{!this.props.hideIndex ?
					<div className='lesson-button-index'>{this.props.lesson}</div> :
					null 
				}

				{this.props.title ? 
					<div className='lesson-button-title'>{this.props.title}</div>:
					null
				}

				{this.props.children}
			</span>
		);
	}
});

module.exports = LessonButton;