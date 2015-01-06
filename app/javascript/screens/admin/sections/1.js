"use strict";

var React        = require("react"),
	LessonButton = require("components/lesson-button");

var Section1 = React.createClass({
	render: function() {
		return (
			<div className='admin-section-1'>
				<LessonButton lesson='1' title='Beginning Sounds'        className='sec-1-btn-long' />
				<LessonButton lesson='2' title='Ending Sounds'           className='sec-1-btn-long' />
				<LessonButton lesson='3' title='Beginning Ending Sounds' className='sec-1-btn-long' />
				<LessonButton lesson='4' title='Rhyme Match'             className='sec-1-btn-short'/>
				<LessonButton lesson='5' title='Rhyme Time'              className='sec-1-btn-short'/>
				<LessonButton lesson='6' title='Say the Word'            className='sec-1-btn-short'/>
				<LessonButton lesson='7' title='Echo'                    className='sec-1-btn-short'/>
			</div>
		);
	}
});

module.exports = Section1;