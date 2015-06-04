var React = require("react");
var WordLesson = require("screens/lesson/word");

/* Lessons 15-19 */
var ShortSoundLesson = React.createClass({
    render() {
        var choices = this.props.choices;
        return (
            <WordLesson {...this.props}
                sounds={{
                    "letter": `lessons/lessons-15-19/letters/${this.props.letter}`,
                    "phonic": `phonics/lesson-phonics/${this.props.phonic}`,
                    "the-letter": "lessons/lessons-15-19/the-letter",
                    "looks-like": "lessons/lessons-15-19/looks-like",
                    "makes-the": "lessons/lessons-15-19/makes-the",
                    "sound-in": "lessons/lessons-15-19/sound-in",
                    "we-use": "lessons/lessons-15-19/we-use",
                    "to-write": "lessons/lessons-15-19/to-write",
                    "sound-in-them": "lessons/lessons-15-19/sound-in-them",
                    "touch-the": "common/lessons/touch-the"
                }}
                instructions={(then) => [
                    then("say", "the-letter"),
                    then("say", "letter"),
                    then("say", "looks-like"),
                    then("say", "the-letter"),
                    then("say", "letter"),
                    then("say", "makes-the"),
                    then("say", "phonic"),
                    then("say", "sound-in"),
                    then("uncenterActor"),
                    ...choices.map((choice, index) => [
                        then("revealChoice", index),
                        then("say", ["words", index]),
                        then("wait", 250)
                    ]),
                    then("say", "we-use"),
                    then("say", "letter"),
                    then("say", "to-write"),
                    then("say", "phonic"),
                    then("say", "sound-in-them"),
                    then("say", "touch-the"),
                    then("sit")
                ]}>
            <div style={{
                    display: "inline-block",
                    position: "absolute",
                    left: "50%",
                    width: 100,
                    height: 100,
                    textAlign: "center",
                    marginLeft: -50,
                    top: 100,
                    fontSize: 200
                }}>{this.props.letter}</div>
            </WordLesson>
        );
    }
});

module.exports = ShortSoundLesson;