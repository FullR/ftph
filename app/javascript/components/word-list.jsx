"use strict";

var Word = require("./word.jsx");

var WordList = React.createClass({
	render: function() {
		return (
			<ul>
				{this.props.words.map(function(word) {
					return (
						<li key={word.get("key")}>
							<Word word={word}/>
						</li>
					);	
				})}
			</ul>
		);
	}
});

module.exports = WordList;