"use strict";

var React = require("react");

module.exports = function(options) {
	return React.createClass({
		mixins: [
			require("mixins/game-screen")("activity", options.choices),
			require("mixins/activity")("2", options.id, options.nextRoute, options.returnRoute),
			require("mixins/render/activity/basic"),
			require("mixins/single-choice")
		],
		defaultAnimation: options.defaultAnimation,
		submitLessonId: options.submitLessonId,

		getInitialState: function() {
			return {
				instructions: {
					"touch-the-word": this.sound("assets/audio/lessons/lesson-2/activities/instructions/touch-the-word"),
					"phonic": this.sound("assets/audio/phonics/activity-phonics/"+options.phonic)
				},

				feedback: {
					"applause": 	this.sound("assets/audio/common/applause"),
					"doesnt-end": this.sound("assets/audio/lessons/lesson-2/activities/feedback/doesnt-end"),
					"ends-with":  this.sound("assets/audio/lessons/lesson-2/activities/feedback/ends-with"),
				}
			};
		},

		instructions: {
			animation: function(then) {
				return [
					then("hideChoices"),
					then("setupActor"),
					then("actorSay", "instructions.touch-the-word"),
					then("wait", 250),
					then("actorSay", "instructions.phonic"),
					then("wait", 250),
					then("uncenterActor"),
					this.actorSayChoices(),
					then("sit")
				];
			}
		},

		feedback: {
			animation: function(then) {
				var selected = this.getSelected();

				return [
					selected.correct ? then("showContinueButton") : null,
					selected.correct ? then("play", "feedback.applause") : null,
					then("actorSay", selected),
					then("wait", 250),
					then("actorSay", selected.correct ? "feedback.ends-with" : "feedback.doesnt-end"),
					then("wait", 250),
					then("actorSay", "instructions.phonic"),
					selected.correct ? null : then("showContinueButton"),
				];
			}
		}
	});

};