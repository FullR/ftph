"use strict";

var React = require("react");

var Modal = React.createClass({
	render: function() {
		return (
			<div className='modal'>
				<div className='modal-overlay' onClick={this.props.onOverlayClick} />
				<div className='modal-window'>
					{this.props.children}
				</div>
			</div>
		);
	}
});

module.exports = Modal;