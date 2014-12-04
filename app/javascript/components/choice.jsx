"use strict";

var React = require("react");

var Choice = React.createClass({
	render: function() {
		var choice = this.props.choice || {},
			className = this.props.className,
			classNames = [
				"choice", 
				choice.selected ? 
					"choice-selected" : 
					"choice-not-selected",
				choice.correct ?
					"choice-correct" :
					"choice-incorrect",
				className || ""
				].join(" ");

		return (
			<button key={this.props.key} className={classNames} onClick={this.props.onClick}>
				{this.props.children}
				<div className={choice.correct ? "choice-correct-icon" : "choice-incorrect-icon"} />
			</button>
		);
	}
});

module.exports = Choice;