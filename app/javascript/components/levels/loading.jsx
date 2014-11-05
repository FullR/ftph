"use strict";

var routeMixin = require("../../route-mixin");

var Loading = React.createClass({
	mixins: [routeMixin],

	getDefaultProps: function() { return {path: "loading"}; },

	render: function() {
		console.log("rendering loading");
		return <div className='loading'>Loading...</div>
	}
});

module.exports = Loading;