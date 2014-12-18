"use strict";

var React = require("react"),
	Link = require("components/utility/link");

var ContinueArrow = React.createClass({

	render: function() {
		return (
			<Link className='continue-arrow' to={this.props.to} />
		);
	}
});

module.exports = ContinueArrow;