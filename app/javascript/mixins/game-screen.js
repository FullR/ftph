"use strict";

var React	  = require("react"),
	Q 		  = require("q"),
	_		  = require("lodash"),
	WordModel = require("models/word"),
	WordImage = require("components/word-image"),
	Choice 	  = require("components/choice"),
	Actor 	  = require("models/actor"),
	slice 	  = [].slice;

module.exports = function(type, choices) {
	return {
		mixins: [
			require("mixins/animation"),
			require("mixins/watch-streams")
		],

		getInitialState: function() {
			return {
				choices: choices.map(function(choice) {
					return new WordModel(choice.word, type, choice);
				})
			};
		},

		showContinueButton: function() {
			this.mergeState({
				showingContinueButton: true
			});
		},

		load: function() {
			return Q.all(_.flatten([
				_.invoke(this.state.instructions || [], "load"),
				_.invoke(this.state.feedback     || [], "load"),
				_.invoke(_.pluck(this.state.choices, "sound"), "load")
			]));
		},

		getStreams: function() {
			return [
				_.pluck(this.state.choices, "stream"), 
				this.state.actor.stream
			];
		},


		getChoices: function() {
			return (
				<div className='choices'>
					{this.state.choices.map(function(choice) {
						if(this.selectChoice) {
							choice.onClick = this.selectChoice(choice);
						}
						return (
							<Choice {...choice}>
								<WordImage word={choice.word} disableHCenter={true} disableVCenter={false}/>
							</Choice>
						);
					}.bind(this))}
				</div>
			);
		}
	};
};