"use strict";

var _ 		   = require("lodash"),
	React      = require("react"),
	WordPart   = require("./word-part.jsx"),
	dictionary = require("../dictionary/dictionary");

var Word = React.createClass({
	getParts: function() {
		return _.pluck(dictionary.getParts(dictionary.get(this.props.word)), "key");
	},

	render: function() {
		var props = this.props,
			word = dictionary.get(this.props.word),
			parts = this.getParts(),
			classNames = ["word", word.key].join(" "),
			marked = this.props.marked;

		return (
			<span key={this.props.key} className={classNames}>
				{parts.map(function(part) {
					return <WordPart
								marked={marked === part}
								onClick={props.onClick} 
								key={dictionary.get(part).key} 
								part={part} />
				})}
			</span>
		);
	}
});

module.exports = Word;