"use strict";

var React = require("react");

var Activity9to10 = React.createClass({
	render: function() {
		var classNames = ["activity", "activity-9-10"].join(" ");
		return (
			<div classNames={classNames}>Activity 9-10</div>
		);
	}
});

module.exports = Activity9to10;