"use strict";

var React = require("react");

/*
	Takes a function that returns a promise
	When clicked, runs the function
	Stores whether or not the promise is resolved in its classname + state
*/

var PromiseButton = React.createClass({
	getInitialState: function() {
		return {
			running: false
		};
	},
	render: function() {
		var promiseFn = this.props.promiseFn;

		function onClick() {
			var result;
			this.setState({
				running: true
			});
			result = promiseFn();
			if(result && result.then) {
				result.then(function() {
					this.setState({
						running: false
					});
				}.bind(this));
			}
		}

		return (
			<div 
				className={(this.state.running ? "playing" : "not-playing") + " " + (this.props.className || "")} 
				onClick={this.props.disabled ? null : onClick.bind(this)}>

				{this.props.children}
			</div>
		);
	}
});

module.exports = PromiseButton;