"use strict";

var React = require("react"),
	Link  = require("components/utility/link"),
	store = require("storage");

function truthy(n) { return !!n; }

var LessonButton = React.createClass({
	route: function() {
		Link.to("lesson/"+this.props.lesson);
	},

	render: function() {
		// the split is to handle sublessons as if they were their parent lesson
		var lastLesson = ((store.get("lastScreen") || {}).lesson || "").split("-")[0],
		classNames = [
			this.props.className,
			"lesson-button",
			this.props.active ? "lesson-button-active" : null,
			this.props.lesson === lastLesson ? "lesson-button-prev" : null
		].filter(truthy).join(" ");

		return (
			<Link className={classNames} to={'lesson/' + this.props.lesson} onClick={this.route}>
				{!this.props.hideIndex ?
					<div className='lesson-button-index'>{this.props.lesson}</div> :
					null 
				}

				{this.props.title ? 
					<div className='lesson-button-title'>{this.props.title}</div>:
					null
				}

				{this.props.children}
			</Link>
		);
	}
});

module.exports = LessonButton;