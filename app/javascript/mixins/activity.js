"use strict";

var React   = require("react"),
	Link    = require("components/utility/link"),
	Teacher = require("components/teacher"),
	Owl     = require("components/owl"),
	Actor   = require("models/actor"),
	Arrow	= require("components/continue-arrow");

module.exports = function(lessonId, activityId, nextRoute, returnRoute) {
	var className = "Lesson-" + lessonId + "-Activity",
		displayName = className + "-" + activityId;
	
	return {
		lessonId: lessonId,
		activityId: activityId,
		displayName: displayName,

		getInitialState: function() {
			return {
				actor: new Actor({
					onClick: function() {
						if(!this.isAnimating()) {
							if(this.shouldShowFeedback()) {
								this.animate("feedback");
							}
							else {
								this.animate("instructions");
							}
						}
					}.bind(this)
				}),
				showingContinueButton: false
			};
		},

		activityClassName: function() {
			var showing = this.state.choices.some(function(choice) {
				return !choice.hidden;
			});
			return ["activity", className, displayName, showing ? "activity-choices-showing" : "activity-choices-hidden"].join(" ");
		},

		feedbackClassName: function() {
			return ["activity-feedback", className+"-feedback", displayName+"-feedback"].join(" ");
		},

		showLesson: function() {
			Link.to(returnRoute || ("lesson/"+lessonId));
		},

		render: function() {
			var showingFeedback = this.shouldShowFeedback();
			var teacher = (
				<Teacher {...this.state.actor}>
					{showingFeedback ? null : "Instructions"}
				</Teacher>
			);

			if(showingFeedback) {
				return (
					<div className={this.feedbackClassName()}>
						{teacher}
						{this.renderFeedback()}
						{this.state.showingContinueButton ? 
							<Arrow to={nextRoute} /> :
							null
						}
					</div>
				);
			}

			return (
				<div className={this.activityClassName()}>
					{teacher}
					<Owl state='sitting' onClick={this.showLesson}>Lesson</Owl>
					{this.renderActivity()}
				</div>
			);
		}
	};
};