"use strict";

var React = require("react"),
	dictionary = require("../dictionary/dictionary");

var WordPart = React.createClass({
	render: function() {
		var part = dictionary.get(this.props.part),
			classNames = ["word-part", part.type, part.key, this.props.marked ? "word-part-marked" : ""].join(" ");

		return (
			<span 
				key={this.props.key} 
				onClick={this.props.onClick} 
				className={classNames} 
				dangerouslySetInnerHTML={{__html: part.html || part.id}} />
		);
	}
});

module.exports = WordPart;