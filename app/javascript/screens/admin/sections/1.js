"use strict";

var React        = require("react"),
	LessonButton = require("components/lesson-button");

var Section1 = React.createClass({
	render: function() {
		return (
			<div className='admin-section-1'>
				<div className='sec-1-row'>
					<div className='sec-1-btn-long'></div>
				</div>

				<div className='sec-1-row'>
					<div className='sec-1-btn-long'></div>
				</div>

				<div className='sec-1-row'>
					<div className='sec-1-btn-long'></div>
				</div>

				<div className='sec-1-row'>
					<div className='sec-1-btn-short'></div>
					<div className='sec-1-btn-short'></div>
					<div className='sec-1-btn-short'></div>
					<div className='sec-1-btn-short'></div>
				</div>
			</div>
		);
	}
});

module.exports = Section1;