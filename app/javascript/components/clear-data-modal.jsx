"use strict";

var React = require("react"),
	Modal = require("./modal.jsx");

var ClearDataModal = React.createClass({
	render: function() {
		return (
			<Modal {...this.props}>
				<div className='change-user-modal'>
					<p>Are you sure you want to clear this user&#39;s data?</p>
					<button className='change-user-modal-no' onClick={this.props.onNoClick}>No</button>
					<button className='change-user-modal-yes' onClick={this.props.onYesClick}>Yes</button>
				</div>
			</Modal>
		);
	}
});

module.exports = ClearDataModal;