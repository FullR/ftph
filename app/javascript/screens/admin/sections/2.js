var React        = require("react"),
    LessonButton = require("components/admin/lesson-button");

var Section2 = React.createClass({
    render: function() {
        return (
            <div className='admin-section-2'>
                <LessonButton lesson='8'  title='Short a'     className='sec-2-btn'/>
                <LessonButton lesson='9'  title='Short e'     className='sec-2-btn'/>
                <LessonButton lesson='10' title='Short i'     className='sec-2-btn'/>
                <LessonButton lesson='11' title='Short o'     className='sec-2-btn'/>
                <LessonButton lesson='12' title='Short u'     className='sec-2-btn'/>
                <LessonButton lesson='13' title='Odd One Out' className='sec-2-btn'/>
                <LessonButton lesson='14' title='A New World' className='sec-2-btn'/>
            </div>
        );
    }
});

module.exports = Section2;