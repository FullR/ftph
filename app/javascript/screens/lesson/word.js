var _ = require("lodash");
var React = require("react");
var Lesson = require("screens/lesson");
var WordChoice = require("components/game-screen/word-choice");

var WordLesson = React.createClass({
    mixins: [require("mixins/extend-sounds")],

    getAdditionalSounds() {
        return {
            "words": this.props.choices.map((choice) => `words/lesson-words/${choice.word}`)
        };
    },

    // Render methods
    renderChoice(lesson, choice, index) {
        return (
            <WordChoice
                {...choice}
                screenType="lesson"
                soundDisabled={lesson.state.animating}
                key={choice.word}/>
        );
    },

    render() {
        return (
            <Lesson {...this.props}
                sounds={this.getSounds()}
                renderChoice={this.renderChoice}/>
        );
    }
});

module.exports = WordLesson;