"use strict";

var React = require("react");

var Lesson1 = React.createClass({
	mixins: [
		require("mixins/lesson")("1", "lesson/1/activity/1"),
		require("mixins/render/lesson/basic"),
		require("mixins/game-screen")("lesson", [
			{word: "tail"},
			{word: "tip"},
			{word: "tape"}
		])
	],

	getInitialState: function() {
		return {
			instructions: {
				"the-first-sound": this.sound("assets/audio/lessons/lesson-1/instructions/the-first-sound"),
				"is":              this.sound("assets/audio/lessons/lesson-1/instructions/is"),
				"say-the-words":   this.sound("assets/audio/lessons/lesson-1/instructions/say-the-words"),
				"slowly":          this.sound("assets/audio/lessons/lesson-1/instructions/slowly"),
				"t":               this.sound("assets/audio/phonics/lesson-phonics/t"),
				"touch-arrow": 	   this.sound("assets/audio/common/touch-arrow")
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

				this.actorSayChoices(),

				then("actorSay", "instructions.is"),
				then("wait", 250),

				then("actorSay", "instructions.t"),
				then("wait", 250),

				then("actorSay", "instructions.say-the-words"),
				then("wait", 250),

				this.actorSayChoices(),

				then("actorSay", "instructions.touch-arrow"),
				then("sit")
			];
		}
	}
});

module.exports = Lesson1;