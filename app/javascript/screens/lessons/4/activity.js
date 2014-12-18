"use strict";

var React     = require("react"),
	WordImage = require("components/word-image");

module.exports = function(options) {
	return React.createClass({
		mixins: [
			require("mixins/game-screen")("activity", options.choices),
			require("mixins/activity")("3", options.id, options.nextRoute),
			require("mixins/render/activity/basic"),
			require("mixins/single-choice")
		],
		initAnimation: options.initAnimation,

		getInitialState: function() {
			return {
				instructions: {
					"touch-the": this.sound("assets/audio/lessons/lesson-4/activities/instructions/touch-the"),
					"rhyme-word":   this.sound("assets/audio/words/activity-words/"+options.rhymeWord)
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
					then("wait", 200),
					then("actorSay", "instructions.rhyme-word"),
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
						then("actorSay", selected),
						then("wait", 250),
						then("actorSay", "feedback.rhyme"),
						then("wait", 250),
						then("actorSay", "instructions.rhyme-word"),
						then("sit")
					];
				}
				else {
					return  [
						then("actorSay", selected),
						then("wait", 250),
						then("actorSay", "feedback.does-not"),
						then("wait", 250),
						then("actorSay", "instructions.rhyme-word"),
						then("showContinueButton"),
						then("sit")
					];
				}
			}
		},

		renderExtras: function() {
			return (
				<div className='rhyme-word' style={{width: 100, height: 100}}>
					<WordImage word={options.rhymeWord} />
				</div>
			);
		},
		
		getCornerInfo: function() {
			return (
				<div className='corner-info'>
					Lesson 4: Rhyme Match<br/>
					Activity {options.id} of 20
				</div>
			);
		}
	});

};