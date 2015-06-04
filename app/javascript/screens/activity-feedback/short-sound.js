var React = require("react");
var WordFeedback = require("screens/activity-feedback/words");

var ShortSoundFeedback = React.createClass({
    render() {
        return (
            <WordFeedback {...this.props}
                sounds={{
                    "phonic": `phonics/activity-phonics/${this.props.phonic}`,
                    "letter": `lessons/lessons-15-19/letters/${this.props.letter}`,
                    "makes-the": "lessons/lessons-15-19/feedback/makes-the",
                    "sound-so": "lessons/lessons-15-19/feedback/sound-so",
                    "has-an": "lessons/lessons-15-19/feedback/has-an",
                    "in-it": "lessons/lessons-15-19/feedback/in-it",
                    "doesnt-make": "lessons/lessons-15-19/feedback/doesnt-make",
                    "sound-so-it-doesnt": "lessons/lessons-15-19/feedback/sound-so-it-doesnt",
                    "sound-so-it-doesnt-have-a": "lessons/lessons-15-19/feedback/sound-so-it-doesnt-have-a"
                }}
                correctAnimation={(then) => [
                    then("say", ["words", 0]),
                    then("say", "makes-the"),
                    then("say", "phonic"),
                    then("say", "sound-so"),
                    then("say", ["words", 0]),
                    then("say", "has-an"),
                    then("say", "letter"),
                    then("say", "in-it")
                ]}
                incorrectAnimation={(then) => [
                    then("say", ["words", 0]),
                    then("say", "doesnt-make"),
                    then("say", "phonic"),
                    (this.props.letter === "u" ?
                        then("say", "sound-so-it-doesnt-have-a") :
                        then("say", "sound-so-it-doesnt")
                    ),
                    then("say", "letter"),
                    then("say", "in-it")
                ]}/>
        );
    }
});

module.exports = ShortSoundFeedback;