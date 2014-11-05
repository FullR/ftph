"use strict";

var WordPart = require("./word-part.jsx");

var WordPartList = React.createClass({
	render: function() {
		return (
			<ul>
				{this.props.parts.map(function(part) {
					return (
						<li key={part.get("key")}>
							<WordPart part={part}/>
						</li>
					);
				})}
			</ul>
		);
	}
});

module.exports = WordPartList;