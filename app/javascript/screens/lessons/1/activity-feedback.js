"use strict";

var React     = require("react"),
    WordImage = require("components/word-image"),
    Teacher   = require("components/teacher");

var ActivityFeedback = React.createClass({
    mixins: [
        require("mixins/sound-container"),
        require("mixins/animation-2"),
        require("mixins/animation-utility/actor")("teacher")
    ],
    autoplayAnimation: "animation",

    getInitialState: function() {
        return {
            teacher: {
                state: "sitting",
                hidden: false
            }
        };
    },

    getSounds: function() {
        return {
            // feedback
            "applause":     "assets/audio/common/applause",
            "doesnt-begin": "assets/audio/lessons/lesson-1/activities/feedback/doesnt-begin",
            "begins-with":  "assets/audio/lessons/lesson-1/activities/feedback/begins-with"
        };
    },

    animation: function(then) {
        return [
            then("say", "applause"),

            this.props.selected.correct ? then("say", "begins-with") : then("say", "doesnt-beging")
        ];
    },

    render: function() {
        var selected = this.props.selected,
            correctStr = selected.correct ? "correct" : "incorrect";

        return (
            <div className={'feedback-words-container single ' + correctStr}>
                <Teacher {...this.state.teacher} />
                <div className='feedback-words'>
                    <div className='feedback-word'>
                        <WordImage word={selected.word} disableHCenter={true}/>
                        {!selected.correct ? 
                            <div className='incorrect-feedback-icon' /> :
                            null
                        }
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ActivityFeedback;