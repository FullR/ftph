var React        = require("react"),
    LessonButton = require("components/admin/lesson-button");

var Section8 = React.createClass({
    render: function() {
        return (
            <div className='admin-section-8'>
                <LessonButton title='Lesson v' className='cons-btn-long'>
                    <LessonButton title='va' lesson='109' className='inner-btn'/>
                    <LessonButton title='ve' lesson='110' className='inner-btn'/>
                    <LessonButton title='vi' lesson='111' className='inner-btn'/>
                    <LessonButton title='vo' lesson='112' className='inner-btn'/>
                </LessonButton>
                <LessonButton title='Review' lesson='113' className='cons-btn-short'>
                    <span className='cons-btn-subheader'>va-vu</span>
                </LessonButton>

                <LessonButton title='Lesson w' className='cons-btn-long'>
                    <LessonButton title='wa' lesson='114' className='inner-btn'/>
                    <LessonButton title='we' lesson='115' className='inner-btn'/>
                    <LessonButton title='wi' lesson='116' className='inner-btn'/>
                </LessonButton>
                <LessonButton title='Review' lesson='117' className='cons-btn-short'>
                    <span className='cons-btn-subheader'>wa-wu</span>
                </LessonButton>
                
                <LessonButton title='Lesson x' lesson='118' className='cons-btn-short'/>
                <LessonButton title='Lesson y' lesson='119' className='cons-btn-long'/>

                <LessonButton title='Lesson z' lesson='120' className='cons-btn-long'/>
                <LessonButton title='Review' lesson='121' className='cons-btn-short'>
                    <span className='cons-btn-subheader'>ya-yu, za-zu</span>
                </LessonButton>
            </div>
        );
    }
});

module.exports = Section8;