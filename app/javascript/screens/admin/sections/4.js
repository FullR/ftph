var React        = require("react"),
    LessonButton = require("components/admin/lesson-button");

var Section4 = React.createClass({
    render: function() {
        return (
            <div className='admin-section-4'>
                <LessonButton title='Lesson b' hideIndex={true} className='cons-btn-long'>
                    <LessonButton title='ba' lesson='21' className='inner-btn'/>
                    <LessonButton title='be' lesson='22' className='inner-btn'/>
                    <LessonButton title='bi' lesson='23' className='inner-btn'/>
                    <LessonButton title='bo' lesson='24' className='inner-btn'/>
                    <LessonButton title='bu' lesson='25' className='inner-btn'/>
                </LessonButton>
                <LessonButton title='Review' lesson='26' className='cons-btn-short'>
                    <span className='cons-btn-subheader'>ba-bu</span>
                </LessonButton>

                <LessonButton title='Lesson c' hideIndex={true} className='cons-btn-long'>
                    <LessonButton title='ca' lesson='27' className='inner-btn'/>
                    <LessonButton title='co' lesson='28' className='inner-btn'/>
                    <LessonButton title='cu' lesson='29' className='inner-btn'/>
                </LessonButton>
                <LessonButton title='Review' lesson='30' className='cons-btn-short'>
                    <span className='cons-btn-subheader'>ca-cu</span>
                </LessonButton>

                <LessonButton lesson='43' className='cons-review-btn'>
                    <div className='lesson-button-title'>
                        <p>Consonant With Vowel Review</p>
                        <p className='lesson-button-letters'>b-f</p>
                    </div>
                </LessonButton>

                <LessonButton title='Lesson d' hideIndex={true} className='cons-btn-long'>
                    <LessonButton title='da' lesson='31' className='inner-btn'/>
                    <LessonButton title='de' lesson='32' className='inner-btn'/>
                    <LessonButton title='di' lesson='33' className='inner-btn'/>
                    <LessonButton title='do' lesson='34' className='inner-btn'/>
                    <LessonButton title='du' lesson='35' className='inner-btn'/>
                </LessonButton>
                <LessonButton title='Review' lesson='36' className='cons-btn-short'>
                    <span className='cons-btn-subheader'>da-du</span>
                </LessonButton>

                <LessonButton title='Lesson f' hideIndex={true} className='cons-btn-long'>
                    <LessonButton title='fa' lesson='37' className='inner-btn'/>
                    <LessonButton title='fe' lesson='38' className='inner-btn'/>
                    <LessonButton title='fi' lesson='39' className='inner-btn'/>
                    <LessonButton title='fo' lesson='40' className='inner-btn'/>
                    <LessonButton title='fu' lesson='41' className='inner-btn'/>
                </LessonButton>
                <LessonButton title='Review' lesson='42' className='cons-btn-short'>
                    <span className='cons-btn-subheader'>fa-fu</span>
                </LessonButton>
            </div>
        );
    }
});

module.exports = Section4;