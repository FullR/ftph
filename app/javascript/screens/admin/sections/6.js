

var React        = require("react"),
    LessonButton = require("components/lesson-button");

var Section6 = React.createClass({
    render: function() {
        return (
            <div className='admin-section-6'>
                <LessonButton title='Lesson L' className='cons-btn-long'>
                    <LessonButton title='la' lesson='64' className='inner-btn'/>
                    <LessonButton title='le' lesson='65' className='inner-btn'/>
                    <LessonButton title='li' lesson='66' className='inner-btn'/>
                    <LessonButton title='lo' lesson='67' className='inner-btn'/>
                    <LessonButton title='lu' lesson='68' className='inner-btn'/>
                </LessonButton>
                <LessonButton title='Review' lesson='69' className='cons-btn-short'>
                    <span className='cons-btn-subheader'>la-lu</span>
                </LessonButton>

                <LessonButton title='Lesson M' className='cons-btn-long'>
                    <LessonButton title='ma' lesson='70' className='inner-btn'/>
                    <LessonButton title='me' lesson='71' className='inner-btn'/>
                    <LessonButton title='mi' lesson='72' className='inner-btn'/>
                    <LessonButton title='mo' lesson='73' className='inner-btn'/>
                    <LessonButton title='mu' lesson='74' className='inner-btn'/>
                </LessonButton>
                <LessonButton title='Review' lesson='75' className='cons-btn-short'>
                    <span className='cons-btn-subheader'>ma-mu</span>
                </LessonButton>
                <LessonButton lesson='88' className='cons-review-btn'>
                    <div className='lesson-button-title'>
                        <p>Consonant With Vowel Review</p>
                        <p className='lesson-button-letters'>l-p</p>
                    </div>
                </LessonButton>

                <LessonButton title='Lesson N' className='cons-btn-long'>
                    <LessonButton title='na' lesson='76' className='inner-btn'/>
                    <LessonButton title='ne' lesson='77' className='inner-btn'/>
                    <LessonButton title='ni' lesson='78' className='inner-btn'/>
                    <LessonButton title='no' lesson='79' className='inner-btn'/>
                    <LessonButton title='nu' lesson='80' className='inner-btn'/>
                </LessonButton>
                <LessonButton title='Review' lesson='81' className='cons-btn-short'>
                    <span className='cons-btn-subheader'>na-nu</span>
                </LessonButton>

                <LessonButton title='Lesson P' className='cons-btn-long'>
                    <LessonButton title='pa' lesson='82' className='inner-btn'/>
                    <LessonButton title='pe' lesson='83' className='inner-btn'/>
                    <LessonButton title='pi' lesson='84' className='inner-btn'/>
                    <LessonButton title='po' lesson='85' className='inner-btn'/>
                    <LessonButton title='pu' lesson='86' className='inner-btn'/>
                </LessonButton>
                <LessonButton title='Review' lesson='87' className='cons-btn-short'>
                    <span className='cons-btn-subheader'>pa-pu</span>
                </LessonButton>
            </div>
        );
    }
});

module.exports = Section6;