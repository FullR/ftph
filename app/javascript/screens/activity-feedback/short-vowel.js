var React = require("react"),
    WordFeedback = require("screens/activity-feedback/words");

var ShortVowelFeedback = React.createClass({
    render: function() {
        return (
            <WordFeedback {...this.props}
                sounds={{
                    "phonic":          `phonics/activity-phonics/${this.props.phonic}`,
                    "makes-the":       "lessons/short-vowel/activities/feedback/makes-the",
                    "doesnt-make-the": "lessons/short-vowel/activities/feedback/doesnt-make-the",
                    "sound":           "lessons/short-vowel/activities/feedback/sound"
                }}

                correctAnimation={(then) => [
                    then("say", "words.0"),
                    then("wait", 250),
                    then("say", "makes-the"),
                    then("wait", 150),
                    then("say", "phonic"),
                    then("wait", 250),
                    then("say", "sound")
                ]}

                incorrectAnimation={(then) => [
                    then("say", "words.0"),
                    then("wait", 250),
                    then("say", "doesnt-make-the"),
                    then("wait", 150),
                    then("say", "phonic"),
                    then("wait", 250),
                    then("say", "sound")
                ]}/>
        );
    }
});

module.exports = ShortVowelFeedback;