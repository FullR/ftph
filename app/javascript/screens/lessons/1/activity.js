"use strict";

var React = require("react");

module.exports = function(options) {
	return React.createClass({
		mixins: [
			require("mixins/game-screen")("activity", options.choices),
			require("mixins/activity")("1", options.id, options.nextRoute, options.returnRoute),
			require("mixins/render/activity/basic"),
			require("mixins/single-choice")
		],
		initAnimation: options.initAnimation,

		getInitialState: function() {
			return {
				instructions: {
					"touch-the-word": this.sound("assets/audio/lessons/lesson-1/activities/instructions/touch-the-word"),
					"phonic": this.sound("assets/audio/phonics/activity-phonics/"+options.phonic)
				},

				feedback: {
					"applause": 	this.sound("assets/audio/common/applause"),
					"doesnt-begin": this.sound("assets/audio/lessons/lesson-1/activities/feedback/doesnt-begin"),
					"begins-with":  this.sound("assets/audio/lessons/lesson-1/activities/feedback/begins-with"),
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
					this.actorSayChoices(0),
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
					then("actorSay", selected.correct ? "feedback.begins-with" : "feedback.doesnt-begin"),
					then("wait", 250),
					then("actorSay", "instructions.phonic"),
					then("sit"),
					selected.correct ? null : then("showContinueButton")
				];
			}
		},
		
		getCornerInfo: function() {
			return (
				<div className='corner-info'>
					Lesson 1: Beginning Sounds<br/>
					Activity {options.id} of 15
				</div>
			);
		}
	});

};