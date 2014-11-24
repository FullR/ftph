"use strict";

var React = require("react");

var Choice = React.createClass({
	render: function() {
		var choice = this.props.choice || {},
			classNames = [
				"choice", 
				choice.selected ? 
					"choice-selected" : 
					"choice-not-selected",
				choice.correct ?
					"choice-correct" :
					"choice-incorrect"
				].join(" ");

		return (
			<button key={this.props.key} className={classNames} onClick={this.props.onClick}>
				{this.props.children}
			</button>
		);
	}
});

module.exports = Choice;