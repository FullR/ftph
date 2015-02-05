"use strict";

var React     = require("react");

var ActivityMultiWordFeedback = React.createClass({
    mixins: [require("mixins/extend-sounds")],

    getAdditionalSounds: function() {
        return this.props.words.reduce(function(sounds, word, index) {
            sounds["word-"+index] = "assets/audio/words/activity-words/"+word;
            return sounds;
        }, {});
    },

    render: function() {
        var WordImage  = require("components/word-image"),
            Feedback   = require("screens/activity-feedback"),
            words      = this.props.words,
            correctStr = this.props.correct ? "correct" : "incorrect";

        return (
            <Feedback {...this.props} sounds={this.getSounds()}>
                <div className={'feedback-words-container multiple ' + correctStr}>
                    <div className='feedback-words'>
                        {words.map((word) =>
                            <div key={word} className='feedback-word'>
                                <WordImage word={word} disableHCenter={true}/>
                                {!this.props.correct ? 
                                    <div className='incorrect-feedback-icon' /> :
                                    null
                                }
                            </div>
                        )}
                    </div>
                </div>
            </Feedback>
        );
    }
});

module.exports = ActivityMultiWordFeedback;