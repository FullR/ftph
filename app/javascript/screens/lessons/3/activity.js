"use strict";

var React = require("react");

module.exports = function(options) {
	return React.createClass({
		mixins: [
			require("mixins/game-screen")("activity", options.choices),
			require("mixins/activity")("3", options.id, options.nextRoute),
			require("mixins/render/activity/basic"),
			require("mixins/multi-choice")
		],
		defaultAnimation: options.defaultAnimation,

		getInitialState: function() {
			return {
				instructions: {
					"begins":       this.sound("assets/audio/lessons/lesson-3/activities/instructions/begins"),
					"ends":         this.sound("assets/audio/lessons/lesson-3/activities/instructions/ends"),
					"now-listen": 	this.sound("assets/audio/lessons/lesson-3/activities/instructions/now-listen"), 
					"phonic":       this.sound("assets/audio/phonics/activity-phonics/"+options.phonic)
				},

				feedback: {
					"applause": 	this.sound("assets/audio/common/applause"),
					"both-begin":   this.sound("assets/audio/lessons/lesson-3/activities/feedback/both-begin"),
					"both-end":     this.sound("assets/audio/lessons/lesson-3/activities/feedback/both-end"),
					"do-not-begin": this.sound("assets/audio/lessons/lesson-3/activities/feedback/do-not-begin"),
					"do-not-end":   this.sound("assets/audio/lessons/lesson-3/activities/feedback/do-not-end"),
					"and":          this.sound("assets/audio/lessons/lesson-3/activities/feedback/and"),
				}
			};
		},

		instructions: {
			animation: function(then) {
				var firstEnding = (options.id === "13");
				return [
					then("hideChoices"),
					then("setupActor"),
					firstEnding ? then("actorSay", "instructions.now-listen") : null,
					firstEnding ? then("wait", 250) : null,
					then("actorSay", "instructions."+(options.ends ? "ends" : "begins")),
					then("wait", 250),
					//then("actorSay", "instructions.phonic"),
					//then("wait", 250),
					then("uncenterActor"),
					this.actorSayChoices(),
					then("sit")
				];
			}
		},

		feedback: {
			animation: function(then) {
				var selected = this.getSelected(),
					ends = options.ends;
				if(this.isCorrect()) {
					return [
						then("showContinueButton"),
						then("play", "feedback.applause"),
						then("actorSay", selected[0]),
						then("actorSay", "feedback.and"),
						then("actorSay", selected[1]),
						then("actorSay", ends ? "feedback.both-end" : "feedback.both-begin"),
						then("actorSay", "instructions.phonic")
					];
				}
				else {
					return  [
						then("actorSay", selected[0]),
						then("actorSay", "feedback.and"),
						then("actorSay", selected[1]),
						then("actorSay", ends ? "feedback.do-not-end" : "feedback.do-not-begin"),
						then("showContinueButton")
					];
				}
			}
		}
	});

};