"use strict";

var React = require("react");

module.exports = function(options) {
	return React.createClass({
		mixins: [
			require("mixins/lesson")(options.id, options.nextRoute),
			require("mixins/render/lesson/basic"),
			require("mixins/game-screen")("lesson", options.choices)
		],

		getInitialState: function() {
			return {
				instructions: {
					"listen-for": this.sound("assets/audio/lessons/lesson-1/sub-lessons/instructions/listen-for"),
					"and":        this.sound("assets/audio/lessons/lesson-1/sub-lessons/instructions/and"),
					"as-in":      this.sound("assets/audio/lessons/lesson-1/sub-lessons/instructions/as-in"),
					"phonic":     this.sound("assets/audio/phonics/lesson-phonics/"+options.phonic)
				}
			};
		},


		instructions: {
			animation: function(then) {
				return [
					then("hideChoices"),
					then("setupActor"),
					then("actorSay", "instructions.listen-for"),
					then("wait", 250),
					then("actorSay", "instructions.phonic"),
					then("wait", 250),
					then("actorSay", "instructions.as-in"),

					then("uncenterActor"),

					this.actorSayChoice(0),
					then("actorSay", "instructions.and"),
					this.actorSayChoice(1),
					then("sit")
				];
			}
		}
	});
};