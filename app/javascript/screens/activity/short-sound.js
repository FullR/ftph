var React = require("react");
var _ = require("lodash");
var WordActivity = require("screens/activity/word");
var WordChoice = require("components/game-screen/word-choice");
var DraggableLetter = require("components/activity/draggable-letter");

var vowels = ["a", "e", "i", "o", "u"];

var ShortSoundActivity = React.createClass({
    mixins: [require("mixins/storage")],

    // Render methods
    renderChoice(activity, choice, index) {
        return (
            <WordChoice {...choice}
                screenType="activity"
                soundDisabled={activity.state.animating}
                onDrop={activity.selectChoice.bind(activity, choice)}
                key={choice.word}/>
        );
    },

    wrongLetterAnimation() {
        if(!this.refs.activity.isAnimating()) {
            this.refs.activity.animate(function(then) {
                return [
                    then("say", "that-is-not"),
                    then("say", "letter"),
                    then("sit")
                ];
            });
        }
    },

    render() {
        var choices = this.props.choices;
        var incorrect = vowels.filter((letter) => letter !== this.props.letter);
        var letters = _.shuffle([
            <DraggableLetter letter={this.props.letter}/>,
            ..._.sample(incorrect, 2).map((letter) => 
                <DraggableLetter key={letter} disabled={true} letter={letter} onMouseDown={this.wrongLetterAnimation}/>
            )
        ]);
        return (
            <WordActivity ref="activity" {...this.props}
                renderChoice={this.renderChoice}
                sounds={{
                    "letter": `lessons/lessons-15-19/letters/${this.props.letter}`,
                    "drag-the": "lessons/lessons-15-19/activity/drag-the",
                    "to-the-word": "lessons/lessons-15-19/activity/to-the-word",
                    "that-is-not": "lessons/lessons-15-19/activity/that-is-not"
                }}
                instructions={(then) => [
                    then("uncenterActor"),
                    then("say", "drag-the"),
                    then("say", "letter"),
                    then("say", "to-the-word"),
                    ...choices.map((choice, index) => [
                        then("revealChoice", index),
                        then("say", ["words", index]),
                        then("wait", 250)
                    ]),
                    then("sit")
                ]}>
                <div style={{
                    position: "absolute",
                    width: "100%", 
                    textAlign: "center",
                    top: 100
                }}>
                    {letters}
                </div>
            </WordActivity>
        );
    }
});

module.exports = ShortSoundActivity;