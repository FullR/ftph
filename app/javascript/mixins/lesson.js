"use strict";

var React = require("react"),
	Link = require("components/utility/link"),
	Owl = require("components/owl"),
	Actor   = require("models/actor"),
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
				actor: new Actor({
					onClick: function() {
						if(!this.isAnimating()) {
							this.animate("instructions");
						}
					}.bind(this)
				})
			};
		},

		lessonClassName: function() {
			return [
				"lesson",
				displayName
			].join(" ");
		},

		getNextActivity: function() {
			var lastActivity = store.get("lastActivity") || {},
				split;

			if(lastActivity.lesson === (""+lessonId) || (this.shouldReturn && this.shouldReturn(lastActivity))) {
				return lastActivity.activity;
			}

			return last(nextRoute.split("/"));
		},

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