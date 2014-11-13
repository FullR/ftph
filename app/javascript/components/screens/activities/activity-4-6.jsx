"use strict";

var React = require("react");

var Activity4to6 = React.createClass({
	render: function() {
		var classNames = ["activity", "activity-4-6"].join(" ");
		return (
			<div classNames={classNames}>Activity 4-6</div>
		);
	}
});

module.exports = Activity4to6;