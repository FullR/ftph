"use strict";

var React     = require("react"),
	WordImage = require("components/word-image");

module.exports = function(options) {
	return React.createClass({
		mixins: [
			require("mixins/game-screen")("activity", options.choices),
			require("mixins/activity")("5", options.id, options.nextRoute),
			require("mixins/render/activity/basic"),
			require("mixins/multi-choice")
		],
		initAnimation: options.initAnimation,

		getInitialState: function() {
			return {
				instructions: {
					"touch-the": this.sound("assets/audio/lessons/lesson-5/activities/instructions/touch-the")
				},

				feedback: {
					"applause": this.sound("assets/audio/common/applause"),
					"rhyme": this.sound("assets/audio/lessons/lesson-4/activities/feedback/rhyme"),
					"does-not": this.sound("assets/audio/lessons/lesson-4/activities/feedback/does-not"),
				}
			};
		},

		instructions: {
			animation: function(then) {
				return [
					then("hideChoices"),
					then("setupActor"),
					then("actorSay", "instructions.touch-the"),
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

				if(this.isCorrect()) {
					return [
						then("showContinueButton"),
						then("play", "feedback.applause"),
						then("actorSay", selected[0]),
						then("wait", 250),
						then("actorSay", "feedback.rhyme"),
						then("wait", 250),
						then("actorSay", selected[1]),
						then("sit")
					];
				}
				else {
					return  [
						then("actorSay", selected[0]),
						then("wait", 250),
						then("actorSay", "feedback.does-not"),
						then("wait", 250),
						then("actorSay", selected[1]),
						then("sit"),
						then("showContinueButton")
					];
				}
			}
		},
		
		getCornerInfo: function() {
			return (
				<div className='corner-info'>
					Lesson 5: Rhyme Time<br/>
					Activity {options.id} of 19
				</div>
			);
		}
	});

};