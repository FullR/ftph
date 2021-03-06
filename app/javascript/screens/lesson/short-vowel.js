var React = require("react");
var WordLesson = require("screens/lesson/word");

// Used for lessons 8-12
var ShortVowelLesson = React.createClass({
    render() {
        var choices = this.props.choices;
        return (
            <WordLesson {...this.props} 
                sounds={{
                    "phonic": `phonics/lesson-phonics/${this.props.phonic}`,
                    "words-like": "lessons/short-vowel/lesson/words-like",
                    "make-the": "lessons/short-vowel/lesson/make-the",
                    "sound": "lessons/short-vowel/lesson/sound",
                    "say": "lessons/short-vowel/lesson/say",
                    "then-touch": "common/lessons/then-touch"
                }}

                instructions={(then) => [
                    then("say", "words-like"),
                    then("uncenterActor"),
                    choices.map((choice, i) => [
                        then("revealChoice", i),
                        then("say", ["words", i]),
                        then("wait", 250),
                    ]),
                    then("say", "make-the"),
                    then("say", "phonic"),
                    then("say", "sound"),
                    then("wait", 75),
                    then("say", "say"),
                    choices.map((choice, i) => [
                        then("say", ["words", i]),
                        then("wait", 250),
                    ]),
                    then("say", "then-touch")
                ]}/>
        );
    }
});

module.exports = ShortVowelLesson;