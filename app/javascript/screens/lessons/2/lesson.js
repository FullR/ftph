"use strict";

var React = require("react");

var Lesson2 = React.createClass({
	mixins: [
		require("mixins/lesson")("2", "lesson/2/activity/1"),
		require("mixins/render/lesson/basic"),
		require("mixins/game-screen")("lesson", [
			{word: "hot"},
			{word: "bat"},
			{word: "sit"}
		])
	],

	getInitialState: function() {
		return {
			instructions: {
				"the-last-sound": this.sound("assets/audio/lessons/lesson-2/instructions/the-last-sound"),
				"is":              this.sound("assets/audio/lessons/lesson-2/instructions/is"),
				"say-the-words":   this.sound("assets/audio/lessons/lesson-2/instructions/say-the-words"),
				"slowly":          this.sound("assets/audio/common/slowly"),
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
				
				then("actorSay", "instructions.the-last-sound"),
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

				then("actorSay", "instructions.slowly"),
				then("wait", 100),

				then("actorSay", "instructions.touch-arrow"),
				then("sit")
			];
		}
	}
});

module.exports = Lesson2;