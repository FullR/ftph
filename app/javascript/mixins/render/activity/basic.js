"use strict";

var React = require("react"),
	Teacher = require("components/teacher");

module.exports = {
	renderActivity: function() {
		return (
			<div>
				{this.getChoices()}
				{this.getCornerInfo()}
				{this.renderExtras ? this.renderExtras() : null}
			</div>
		);
	}
};