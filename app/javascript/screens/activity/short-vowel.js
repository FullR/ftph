var React = require("react");
var WordActivity = require("screens/activity/word");

var ShortVowelActivity = React.createClass({
    render() {
        var choices = this.props.choices;
        return (
            <WordActivity {...this.props}
                sounds={{
                    "phonic": `phonics/activity-phonics/${this.props.phonic}`,
                    "touch-the-word": "lessons/short-vowel/activities/touch-the-word",
                    "sound": "lessons/short-vowel/activities/sound"
                }}

                instructions={(then) => [
                    then("say", "touch-the-word"),
                    then("wait", 250),
                    then("say", "phonic"),
                    then("wait", 250),
                    then("say", "sound"),
                    then("wait", 250),
                    then("uncenterActor"),
                    ...choices.map((choice, index) => [
                        then("revealChoice", index),
                        then("say", ["words", index]),
                        then("wait", 250)
                    ]),
                    then("sit")
                ]}/>
        );
    }
});

module.exports = ShortVowelActivity;