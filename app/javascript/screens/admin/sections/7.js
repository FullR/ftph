"use strict";

var React        = require("react"),
    LessonButton = require("components/lesson-button");

var Section7 = React.createClass({
    render: function() {
        return (
            <div className='admin-section-7'>
                <LessonButton title='Lesson Q' lesson='89' hideIndex={true} className='cons-btn-long'/>
                <div className='cons-btn-short empty' />

                <LessonButton title='Lesson R' className='cons-btn-long'>
                    <LessonButton title='ra' lesson='90' className='inner-btn'/>
                    <LessonButton title='re' lesson='91' className='inner-btn'/>
                    <LessonButton title='ri' lesson='92' className='inner-btn'/>
                    <LessonButton title='ro' lesson='93' className='inner-btn'/>
                    <LessonButton title='ru' lesson='94' className='inner-btn'/>
                </LessonButton>
                <LessonButton title='Review' lesson='95' className='cons-btn-short'>
                    <span className='cons-btn-subheader'>ra-ru</span>
                </LessonButton>
                <LessonButton className='cons-review-btn'>
                    <div className='lesson-button-title'>
                        <p>Consonant With Vowel Review</p>
                        <p className='lesson-button-letters'>q-t</p>
                    </div>
                </LessonButton>

                <LessonButton title='Lesson S' className='cons-btn-long'>
                    <LessonButton title='sa' lesson='96' className='inner-btn'/>
                    <LessonButton title='se' lesson='97' className='inner-btn'/>
                    <LessonButton title='si' lesson='98' className='inner-btn'/>
                    <LessonButton title='so' lesson='99' className='inner-btn'/>
                    <LessonButton title='su' lesson='100' className='inner-btn'/>
                </LessonButton>
                <LessonButton title='Review' lesson='101' className='cons-btn-short'>
                    <span className='cons-btn-subheader'>sa-su</span>
                </LessonButton>

                <LessonButton title='Lesson T' className='cons-btn-long'>
                    <LessonButton title='ta' lesson='102' className='inner-btn'/>
                    <LessonButton title='te' lesson='103' className='inner-btn'/>
                    <LessonButton title='ti' lesson='104' className='inner-btn'/>
                    <LessonButton title='to' lesson='105' className='inner-btn'/>
                    <LessonButton title='tu' lesson='106' className='inner-btn'/>
                </LessonButton>
                <LessonButton title='Review' lesson='107' className='cons-btn-short'>
                    <span className='cons-btn-subheader'>ta-tu</span>
                </LessonButton>
            </div>
        );
    }
});

module.exports = Section7;