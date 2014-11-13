"use strict";

var React = require("react");

var WordPart = React.createClass({
	render: function() {
		var props = this.props,
			part = props.part,
			type = part.type,
			id = part.id,
			html = part.html,
			key = part.key,
			classNames = ["word-part", type, key].join(" ");

		return (
			<span onClick={props.onClick} className={classNames} dangerouslySetInnerHTML={{__html: html || id}} />
		);
	}
});

module.exports = WordPart;