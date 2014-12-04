"use strict";

var React       = require("react"),
	dispatcher  = require("dispatcher"),
	Link        = require("components/utility/link.jsx");

var Login = React.createClass({

	getInitialState: function() {
		return {
			name: ""
		};
	},

	updateName: function(event) {
		this.setState({
			name: event.target.value
		});
	},

	submit: function(event) {
		event.preventDefault();
		dispatcher.send("setUser", this.state.name);
		Link.to("menu");
	},

	render: function() {
		var name = this.state.name;

		return (
			<div className='login'>
				<h1>Enter a name to begin.</h1>
				<form onSubmit={this.submit}>
					<input value={name} onChange={this.updateName} placeholder="New User Name" />
					<button>Create</button>
				</form>
			</div>
		);
	}
});

module.exports = Login;