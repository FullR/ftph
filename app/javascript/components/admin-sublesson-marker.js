"use strict";

var React = require("react"),
	store = require("storage"),
	Link  = require("components/utility/link"),
	util  = require("utility");

function getLast() {
	return store.get("lastScreen") || {};
}

var AdminSublessonMarker = React.createClass({
	onClick(e) {
		e.preventDefault();
		this.routeTo();
	},

	routeTo() {
		Link.to(["lesson/", this.props.parent, "-", this.props.letter].join(""));
	},

	isFromSubsequentActivity() {
		var {lesson, activity} = getLast();

		return (lesson === this.props.parent && this.props.activities.indexOf(activity) >= 0);
	},

	isActive() {
		var {lesson, activity} = getLast();

		return (lesson === this.props.parent + "-" + this.props.letter) || 
			   this.isFromSubsequentActivity();
	},

	render() {
		var classNames = [
			"admin-sublesson-marker",
			this.isActive() ? "admin-sublesson-marker-active" : null
		].join(" ");

		return (
			<div className={classNames} onClick={this.onClick}>
				<div className='admin-sublesson-marker-content'>
					/{this.props.letter}/
				</div>
			</div>
		);
	}
});

module.exports = AdminSublessonMarker;