"use strict";

var React         = require("react"),
	attemptHelper = require("helpers/attempt"),
	AttemptMixin  = attemptHelper.mixin,
	Link 		  = require("components/utility/link.jsx");

var AttemptComponents = {
	"1": require("./attempts/attempt-type-1.jsx"),
	"2": require("./attempts/attempt-type-2.jsx"),
	"3": require("./attempts/attempt-type-3.jsx"),
	"4": require("./attempts/attempt-type-4.jsx")
};

var Attempt = React.createClass({
	mixins: [AttemptMixin],

	toMenu: function() {
		this.stopAudio();
		Link.to("menu");
	},

	// kind of gross, but it works and is simple enough
	getTitle: function() {
		var getTypePart = function() {
			var typeWord,
				addClass;

			switch(this.props.attempt.wordType) {
				case "prefix": typeWord = "Prefixes"; addClass = true; break;
				case "root":   typeWord = "Roots";    addClass = true; break;
				case "suffix": typeWord = "Suffixes"; addClass = true; break;
				case 2:        typeWord = "Two Word Parts";            break;
				case 3:        typeWord = "Three Word Parts";          break;
			}
			return (<span className={addClass ? this.props.attempt.wordType : null}>{typeWord}</span>);
		}.bind(this);

		return <span>Game {this.props.id} - {getTypePart()} {this.getIndexString()}</span>
	},

	render: function() {
		var attempt = this.props.attempt,
			AttemptComponent = AttemptComponents[attempt.attemptType];
			
		return (
			<div className='attempt-container'>
				<span className='attempt-title'>{this.getTitle()}</span>
				<AttemptComponent attempt={attempt} id={this.props.id}/>
				<div onClick={this.toMenu} className='attempt-home-button'></div>
			</div>
		);
	}
});

module.exports = Attempt;