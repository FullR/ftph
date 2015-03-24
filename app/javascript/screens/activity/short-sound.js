var React = require("react"),
    WordActivity = require("screens/activity/word");

var ShortSoundActivity = React.createClass({
    mixins: [require("mixins/storage")],
    render: function() {
        var choices = this.props.choices;
        return (
            <WordActivity {...this.props}
                onSubmit={(activity, correct) => 
                    this.save([this.props.namespace, "activities", this.props.id, "correct"], correct)
                }
                sounds={{
                    "letter": `lessons/lessons-15-19/letters/${this.props.letter}`,
                    "drag-the": "lessons/lessons-15-19/activity/drag-the",
                    "to-the-word": "lessons/lessons-15-19/activity/to-the-word"
                }}
                instructions={(then) => [
                    then("say", "drag-the"),
                    then("say", "letter"),
                    then("say", "to-the-word"),
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

module.exports = ShortSoundActivity;