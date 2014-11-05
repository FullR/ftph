"use strict";

var routeMixin = require("../../route-mixin"),
	Link = require("../utility/link.jsx");

var Menu = React.createClass({
	mixins: [routeMixin],

	getDefaultProps: function() {
		return {path: "menu"};
	},

	render: function() {
		var activityButtons = _.range(1, 11).map(function(n) {
			return (
				<Link key={n} to={"activity/"+n}>
					<button>{"activity " + n}</button>
				</Link>
			);
		});
		
		return (
			<div className='menu'>
				menu.jsx

				{activityButtons}
				<Link to='splash'>
					<button>splash</button>
				</Link>
			</div>
		);
	}
});

module.exports = Menu;