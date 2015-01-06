"use strict";

var React = require("react");

var Lesson4 = React.createClass({
	mixins: [
		require("mixins/lesson")("4", "lesson/4/activity/1"),
		require("mixins/render/lesson/basic"),
		require("mixins/game-screen")("lesson", [
			{word: "red"},
			{word: "head"},
			{word: "bed"},

			{word: "wait"},
			{word: "gate"},
			{word: "eight"}
		])
	],

	getInitialState: function() {
		return {
			instructions: {
				"words-like":      this.sound("assets/audio/lessons/lesson-4/instructions/words-like"),
				"rhyme-because":   this.sound("assets/audio/lessons/lesson-4/instructions/rhyme-because"),
				"rhyme-because-2": this.sound("assets/audio/lessons/lesson-4/instructions/rhyme-because-2"),
				"slowly": 		   this.sound("assets/audio/common/slowly"),
				"touch-arrow":     this.sound("assets/audio/common/touch-arrow")
			}
		};
	},


	instructions: {
		animation: function(then) {
			return [
				then("setupActor"),
				then("hideChoices"),
				then("detachChoices", [3, 4, 5]),
				then("attachChoices", [0, 1, 2]),

				then("actorSay", "instructions.words-like"),
				then("uncenterActor"),
				this.actorSayChoices([0, 1, 2]),
				then("actorSay", "instructions.rhyme-because"),

				then("detachChoices", [0, 1, 2]),
				then("attachChoices", [3, 4, 5]),

				this.actorSayChoices([3, 4, 5]),
				then("actorSay", "instructions.rhyme-because-2"),
				this.actorSayChoices([3, 4, 5]),
				then("actorSay", "instructions.slowly"),
				then("wait", 100),
				then("actorSay", "instructions.touch-arrow"),
				then("sit")
			];
		}
	}
});

module.exports = Lesson4;