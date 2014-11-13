"use strict";

var React       = require("react"),
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
		Link.to("menu");
	},

	submit: function(event) {
		event.preventDefault();
		userActions.createUser(this.state.name);
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