

var React        = require("react"),
    LessonButton = require("components/admin/lesson-button");

var Section3 = React.createClass({
    render: function() {
        return (
            <div className='admin-section-3'>
                <LessonButton lesson='15' title='Short A'             className='sec-3-btn'></LessonButton>
                <LessonButton lesson='16' title='Short E'             className='sec-3-btn'></LessonButton>
                <LessonButton lesson='17' title='Short I'             className='sec-3-btn'></LessonButton>
                <LessonButton lesson='18' title='Short O'             className='sec-3-btn'></LessonButton>
                <LessonButton lesson='19' title='Short U'             className='sec-3-btn'></LessonButton>
                <LessonButton lesson='20' title='Short Vowels Review' className='sec-3-btn'></LessonButton>
            </div>
        );
    }
});

module.exports = Section3;