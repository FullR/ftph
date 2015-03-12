var _           = require("lodash"),
    React       = require("react"),
    Lesson      = require("screens/lesson"),
    WordChoice  = require("components/game-screen/word-choice");

var WordLesson = React.createClass({
    mixins: [require("mixins/extend-sounds")],

    getAdditionalSounds: function() {
        return {
            "words": this.props.choices.map((choice) => `words/lesson-words/${choice.word}`)
        };
    },

    // Render methods
    renderChoice: function(lesson, choice, index) {
        return (
            <WordChoice
                {...choice}
                screenType="lesson"
                soundDisabled={lesson.state.animating}
                key={choice.word}/>
        );
    },

    render: function() {
        return (
            <Lesson {...this.props}
                sounds={this.getSounds()}
                renderChoice={this.renderChoice}/>
        );
    }
});

module.exports = WordLesson;