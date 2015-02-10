var React        = require("react"),
    LessonButton = require("components/lesson-button");

var Section5 = React.createClass({
    render: function() {
        return (
            <div className='admin-section-5'>
                <LessonButton title='Lesson G' hideIndex={true} className='cons-btn-long'>
                    <LessonButton title='ga' lesson='44' className='inner-btn'/>
                    <LessonButton title='go' lesson='45' className='inner-btn'/>
                    <LessonButton title='gu' lesson='46' className='inner-btn'/>
                </LessonButton>
                <LessonButton title='Review' lesson='47' className='cons-btn-short'>
                    <span className='cons-btn-subheader'>ga-gu</span>
                </LessonButton>

                <LessonButton title='Lesson H' hideIndex={true} className='cons-btn-long'>
                    <LessonButton title='ha' lesson='48' className='inner-btn'/>
                    <LessonButton title='he' lesson='49' className='inner-btn'/>
                    <LessonButton title='hi' lesson='50' className='inner-btn'/>
                    <LessonButton title='ho' lesson='51' className='inner-btn'/>
                    <LessonButton title='hu' lesson='52' className='inner-btn'/>
                </LessonButton>
                <LessonButton title='Review' lesson='53' className='cons-btn-short'>
                    <span className='cons-btn-subheader'>ha-hu</span>
                </LessonButton>
                <LessonButton lesson='63' className='cons-review-btn'>
                    <div className='lesson-button-title'>
                        <p>Consonant With Vowel Review</p>
                        <p className='lesson-button-letters'>g-k</p>
                    </div>
                </LessonButton>

                <LessonButton title='Lesson J' hideIndex={true} className='cons-btn-long'>
                    <LessonButton title='ja' lesson='54' className='inner-btn'/>
                    <LessonButton title='je' lesson='55' className='inner-btn'/>
                    <LessonButton title='ji' lesson='56' className='inner-btn'/>
                    <LessonButton title='jo' lesson='57' className='inner-btn'/>
                    <LessonButton title='ju' lesson='58' className='inner-btn'/>
                </LessonButton>
                <LessonButton title='Review' lesson='59' className='cons-btn-short'>
                    <span className='cons-btn-subheader'>ja-ju</span>
                </LessonButton>

                <LessonButton title='Lesson K' hideIndex={true} className='cons-btn-long'>
                    <LessonButton title='ke' lesson='60' className='inner-btn'/>
                    <LessonButton title='ki' lesson='61' className='inner-btn'/>
                </LessonButton>
                <LessonButton title='Review' lesson='62' className='cons-btn-short'>
                    <span className='cons-btn-subheader'>ka-ku</span>
                </LessonButton>
            </div>
        );
    }
});

module.exports = Section5;