"use strict";

var routeMixin = require("../route-mixin");

var Route = React.createClass({
	mixins: [routeMixin],

	render: function() {
		return (
			<div className='route'>
				{this.routedChildren()}
			</div>
		);
	}
});

module.exports = Route;