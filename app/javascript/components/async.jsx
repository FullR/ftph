"use strict";

var React = require("react");

// Waits for a promise to resolve and renders the result
// The promise should resolve a renderable component
// Example: <Async promise={somePromise} />

var Async = React.createClass({
	getInitialState: function() {
		return {
			resolved: false
		};
	},

	render: function() {
		var promise  = this.props.promise,
			resolved = this.state.resolved,
			value 	 = this.state.value;

		if(resolved) {
			return (
				<div>
					{value}
					{this.props.children}
				</div>
			);
		}

		promise.then(function(value) {
			this.setState({resolved: true, value: value});
		}.bind(this));
		
		return (<div>Loading...</div>);
	}
});

module.exports = Async;