"use strict";

var React = require("react"),
	Q     = require("q"),
	Link  = require("components/utility/link"),
	Owl   = require("components/owl"),
	Actor = require("models/actor"),
	store = require("storage"),
	Arrow = require("components/continue-arrow");

function last(arr) {
	return arr[arr.length-1];
}

module.exports = function(lessonId, nextRoute) {
	var displayName = "lesson-" + lessonId;
	return {
		lessonId: lessonId,
		displayName: displayName,

		getInitialState: function() {
			return {
				// owl
				actor: new Actor({
					onClick: function() {
						if(!this.isAnimating()) {
							this.animate("instructions");
						}
					}.bind(this)
				})
			};
		},

		componentDidMount: function() {
			// on show, load sounds then play instructions animation
			Q.resolve()
				.then(this.load)
				.then(this.animate.bind(this, "instructions"));
		},

		// Get DOM class names
		lessonClassName: function() {
			return [
				"lesson",
				displayName
			].join(" ");
		},

		// Returns the id of the next activity
		getNextActivity: function() {
			var lastActivity = store.get("lastActivity") || {},
				split;

			if(lastActivity.lesson === (""+lessonId) || (this.shouldReturn && this.shouldReturn(lastActivity))) {
				return lastActivity.activity;
			}

			return last(nextRoute.split("/"));
		},

		// Returns the route to navigate to when the arrow is clicked
		next: function() {
			var lastActivity = store.get("lastActivity") || {};

			if(lastActivity.lesson === (""+lessonId) || (this.shouldReturn && this.shouldReturn(lastActivity))) {
				return ["lesson/", lastActivity.lesson, "/activity/", lastActivity.activity].join("");
			}

			return nextRoute;
		},

		render: function() {
			return (
				<div className={this.lessonClassName()}>
					<Owl {...this.state.actor}>
						Lesson
					</Owl>
					{this.renderLesson()}
					<Arrow to={this.next()}>Activity {this.getNextActivity()}</Arrow>
				</div>
			);
		}
	};
};