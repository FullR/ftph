"use strict";

var React = require("react");

module.exports = function(options) {
	return React.createClass({
		mixins: [
			require("mixins/game-screen")("activity", options.choices),
			require("mixins/activity")("6", options.id, options.nextRoute, "lesson/6"),
			require("mixins/render/activity/basic"),
			require("mixins/single-choice")
		],
		defaultAnimation: options.defaultAnimation,
		submitLessonId: options.submitLessonId,

		getInitialState: function() {
			return {
				instructions: {
					"listen-to-these": this.sound("assets/audio/lessons/lesson-6/activities/instructions/listen-to-these"),
					"phonics": options.phonics.map(function(phonic) {
						return this.sound("assets/audio/phonics/activity-phonics/" + phonic)
					}, this)
				},

				feedback: {
					"applause": this.sound("assets/audio/common/applause")
				}
			};
		},

		instructions: {
			animation: function(then) {
				var steps = [
					then("hideChoices"),
					then("setupActor"),
					then("actorSay", "instructions.listen-to-these"),
					then("wait", 250),
					then("actorSay", "instructions.phonic"),
					then("wait", 250),
				];

				this.state.instructions.phonics.forEach(function(sound) {
					steps.push(then("actorSay", sound));
				});

				steps.push.apply(steps, [
					then("wait", 250),
					then("uncenterActor"),
					then("revealChoices"),
					then("sit")
				]);

				return steps;
			}
		},

		feedback: {
			animation: function(then) {
				var correct = this.isCorrect();
				if(correct) {
					return [
						then("showContinueButton"),
						then("play", "feedback.applause")
					];
				}
				else {
					return [
						then("showContinueButton")
					];
				}
			}
		}
	});
};