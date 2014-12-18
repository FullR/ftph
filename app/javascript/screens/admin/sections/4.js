"use strict";

var React = require("react"),
	Link  = require("components/utility/link");

var Section4 = React.createClass({
	render: function() {
		return (
			<div className='admin-section-4'>
				<div className='sec-4-row'>
					<div className='sec-4-btn-long'>
						<div className='inner-btn-row'>
							<div className='inner-btn'></div>
							<div className='inner-btn'></div>
							<div className='inner-btn'></div>
							<div className='inner-btn'></div>
							<div className='inner-btn'></div>
						</div>
					</div>
					<div className='sec-4-btn-short'></div>
				</div>
				<div className='sec-4-row'>
					<div className='sec-4-btn-long'>
						<div className='inner-btn-row'>
							<div className='inner-btn'></div>
							<div className='inner-btn'></div>
							<div className='inner-btn'></div>
						</div>
					</div>
					<div className='sec-4-btn-short'></div>
				</div>
				<div className='sec-4-row'>
					<div className='sec-4-btn-long'>
						<div className='inner-btn-row'>
							<div className='inner-btn'></div>
							<div className='inner-btn'></div>
							<div className='inner-btn'></div>
							<div className='inner-btn'></div>
							<div className='inner-btn'></div>
						</div>
					</div>
					<div className='sec-4-btn-short'></div>
				</div>
				<div className='sec-4-row'>
					<div className='sec-4-btn-long'>
						<div className='inner-btn-row'>
							<div className='inner-btn'></div>
							<div className='inner-btn'></div>
							<div className='inner-btn'></div>
							<div className='inner-btn'></div>
							<div className='inner-btn'></div>
						</div>
					</div>
					<div className='sec-4-btn-short'></div>
				</div>
				<div className='sec-4-side-btn'></div>
			</div>
		);
	}
});

module.exports = Section4;