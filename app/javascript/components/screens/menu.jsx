"use strict";

var _ = require("lodash"),
	React = require("react"),
	Link = require("../utility/link.jsx");

var Menu = React.createClass({
	render: function() {
		var activityButtons = _.range(1,11).map(function(n) {
			return (
				<Link key={n} to={"activity/"+n}>
					<button>{"Activity " + n}</button>
				</Link>
			);
		});

		var user = this.props.user;

		return (
			<div className='menu'>
				<p>{user}</p>
				{activityButtons}
			</div>
		);
	}
});

module.exports = Menu;