"use strict";

var React = require("react"),
	Link = require("components/utility/link");

function truthy(n) { return !!n; }

var LessonButton = React.createClass({
	route: function() {
		Link.to("lesson/"+this.props.lesson);
	},

	render: function() {
		var classNames = [
			this.props.className,
			"lesson-button",
			"lesson-button-" + this.props.lesson,
			this.props.active ? "lesson-button-active" : null
		].filter(truthy).join(" ");

		return (
			<Link className={classNames} to={'lesson/' + this.props.lesson} onClick={this.route}>
				<div className='lesson-button-index'>{this.props.lesson}</div>
				{this.props.children}
			</Link>
		);
	}
});

module.exports = LessonButton;