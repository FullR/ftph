"use strict";

var React = require("react");

var WordImage = React.createClass({
	mixins: [require("mixins/fit-image")],
	render: function() {
		return (
			<img className="word-image" src={"assets/images/words/"+this.props.word+".png"}/>
		);
	}
});

module.exports = WordImage;