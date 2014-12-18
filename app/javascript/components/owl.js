"use strict";

var React = require("react");

var Owl = React.createClass({
	mixins: [require("mixins/utility")],
	render: function() {
		var className = this.className(
			"owl",
			"owl-"+this.props.state,
			this.props.centered ? "owl-centered" : null,
			this.props.hidden ? "owl-hidden" : null,
			this.props.onClick ? "selectable" : null
		);

		this.props.className = className;

		return (
			<div {...this.props}>
				<div className='owl-image'/>

				<div className='owl-content'>
					{this.props.children}
				</div>
			</div>
		);
	}
});

module.exports = Owl;