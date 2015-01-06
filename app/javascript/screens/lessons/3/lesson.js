"use strict";

var React = require("react");

var Lesson3 = React.createClass({
	mixins: [
		require("mixins/lesson")("3", "lesson/3/activity/1"),
		require("mixins/render/lesson/basic"),
		require("mixins/game-screen")("lesson", [
			{word: "bat"}
		])
	],

	getInitialState: function() {
		return {
			instructions: {
				"the-first-sound": this.sound("assets/audio/lessons/lesson-3/instructions/the-first-sound"),
				"the-last-sound":  this.sound("assets/audio/lessons/lesson-3/instructions/the-last-sound"),
				"say-the":         this.sound("assets/audio/lessons/lesson-3/instructions/say-the"),
				"is":              this.sound("assets/audio/lessons/lesson-3/instructions/is"),
				"bh":              this.sound("assets/audio/phonics/lesson-phonics/bh"),
				"t":               this.sound("assets/audio/phonics/lesson-phonics/t"),
				"slowly": 		   this.sound("assets/audio/common/slowly"),
				"touch-arrow":     this.sound("assets/audio/common/touch-arrow")
			}
		};
	},


	instructions: {
		animation: function(then) {
			return [
				then("hideChoices"),
				then("setupActor"),
				
				then("actorSay", "instructions.the-first-sound"),
				then("wait", 250),
				then("uncenterActor"),

				this.actorSayChoice(0),
				then("wait", 250),

				then("actorSay", "instructions.is"),
				then("wait", 250),
				then("actorSay", "instructions.bh"),
				then("wait", 250),
				then("actorSay", "instructions.the-last-sound"),
				then("wait", 250),

				this.actorSayChoice(0),
				then("wait", 250),

				then("actorSay", "instructions.is"),
				then("wait", 250),
				then("actorSay", "instructions.t"),
				then("wait", 250),

				then("actorSay", "instructions.say-the"),
				then("wait", 250),
				this.actorSayChoice(0),
				then("actorSay", "instructions.slowly"),
				then("wait", 100),

				then("actorSay", "instructions.touch-arrow"),
				then("sit")
			];
		}
	}
});

module.exports = Lesson3;