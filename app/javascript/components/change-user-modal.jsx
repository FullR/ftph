"use strict";

var React = require("react"),
	Modal = require("./modal.jsx");

var ChangeUserModal = React.createClass({
	render: function() {
		return (
			<Modal {...this.props}>
				<div className='change-user-modal'>
					<p>Changing users will permanently remove this user&#39;s progress.  Are you sure you wish to continue?</p>
					<button className='change-user-modal-no' onClick={this.props.onNoClick}>No</button>
					<button className='change-user-modal-yes' onClick={this.props.onYesClick}>Yes</button>
				</div>
			</Modal>
		);
	}
});

module.exports = ChangeUserModal;