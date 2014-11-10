"use strict";

var Async = React.createClass({
	getInitialState: function() {
		return {
			resolved: false,
			resolvedValue: null
		};
	},

	render: function() {
		var promise  = this.props.promise,
			resolved = this.state.resolved,
			value 	 = this.state.resolvedValue;

		if(resolved) {
			return <div>{value}</div>;
		}
		else {
			promise.then(function(value) {
				this.setState({resolved: true, resolvedValue: value});
			}.bind(this));
			
			return <div>Loading...</div>
		}
	}
});

module.exports = Async;