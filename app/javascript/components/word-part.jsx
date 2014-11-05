"use strict";

var WordPart = React.createClass({
	render: function() {
		var props = this.props,
			part = props.part,
			type = part.get("type"),
			id = part.get("id"),
			html = part.get("html"),
			key = part.get("key"),
			classNames = ["word-part", type, key].join(" ");

		return (
			<span onClick={props.onClick} className={classNames} dangerouslySetInnerHTML={{__html: html || id}} />
		);
	}
});

module.exports = WordPart;