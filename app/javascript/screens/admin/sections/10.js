"use strict";

var React        = require("react"),
	Link         = require("components/utility/link"),
	LessonButton = require("components/lesson-button");

var Section10 = React.createClass({
	render: function() {
		return (
			<div className='admin-section-10'>
				<LessonButton title='Reading First Words' lesson='125' className='sec-10-btn'/>
				<LessonButton title='Reading For Meaning' lesson='126' className='sec-10-btn'/>
			</div>
		);
	}
});

module.exports = Section10;