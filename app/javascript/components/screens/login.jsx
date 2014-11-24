"use strict";

var React       = require("react"),
	dispatcher  = require("../../dispatcher"),
	Link        = require("../utility/link.jsx");

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
				<form onSubmit={this.submit}>
					<input value={name} onChange={this.updateName} />
					<button>Create</button>
				</form>
			</div>
		);
	}
});

module.exports = Login;