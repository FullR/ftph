"use strict";

var routeMixin = require("../../route-mixin"),
	User = require("../../models/user");

var Login = React.createClass({
	mixins: [routeMixin],

	getDefaultProps: function() {
		return {path: "login"};
	},

	getInitialState: function() {
		return {
			name: ""
		};
	},

	render: function() {
		var app = this.props.app,
			users = app.get("users"),
			state = this.state,
			setState = this.setState.bind(this);

		if(users.length) {
			setTimeout(0, function() {
				this.navigate("menu");
			}.bind(this));
		}

		var addUser = function() {
			event.preventDefault();
			var name = (state.name||"").trim(),
				user;

			if(name.length > 0) {
				user = new User({name: state.name});
				app.set("users", [user]);
				app.save();
				setState({name: ""});
				this.navigate("menu");
			}
		}.bind(this);

		function updateName(event) {
			setState({
				name: event.target.value
			});
		}

		return (
			<div className='login'>
				<form onSubmit={addUser}>
					<input value={state.name} onChange={updateName}/>
					<button>Done</button>
				</form>
			</div>
		);
	}
});

module.exports = Login;