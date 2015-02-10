var React        = require("react"),
    LessonButton = require("components/lesson-button");

var Section9 = React.createClass({
    render: function() {
        return (
            <div className='admin-section-9'>
                <LessonButton title='Co-Articulation' lesson='122' className='sec-9-btn'/>
                <LessonButton title='Identifying Ending Letters' lesson='123' className='sec-9-btn'/>
                <LessonButton title='Identifying Vowel Letters' lesson='124' className='sec-9-btn'/>
            </div>
        );
    }
});

module.exports = Section9;