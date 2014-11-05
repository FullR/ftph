"use strict";

var WordPart = require("./word-part.jsx");

var Word = React.createClass({
	render: function() {
		var props = this.props,
			word = props.word,
			parts = word.get("parts"),
			id = word.get("id"),
			html = word.get("html"),
			key = word.get("key"),
			classNames = ["word", key].join(" ");

		return (
			<span className={classNames}>
				{parts.map(function(part) {
					return <WordPart onClick={props.onClick} key={part.get("key")} part={part}/>
				})}
			</span>
		);
	}
});

module.exports = Word;