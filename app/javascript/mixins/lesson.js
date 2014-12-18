"use strict";

var React = require("react"),
	Link = require("components/utility/link"),
	Owl = require("components/owl"),
	Actor   = require("models/actor"),
	Arrow = require("components/continue-arrow");

module.exports = function(lessonId, nextRoute) {
	var displayName = "lesson-"+lessonId;
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

		render: function() {
			return (
				<div className={this.lessonClassName()}>
					<Owl {...this.state.actor} />
					{this.renderLesson()}
					<Arrow to={nextRoute}></Arrow>
				</div>
			);
		}
	};
};