var React        = require("react"),
    WordImage    = require("components/game-screen/word-image"),
    Choice       = require("components/game-screen/choice"),
    soundManager = require("sound/sound-manager");

var WordChoice = React.createClass({
    render: function() {
        var sound = soundManager.get(`words/${this.props.screenType}-words/${this.props.word}`);
        return (
            <Choice {...this.props} sound={sound}>
                <WordImage word={this.props.word} disableHCenter={true} />
            </Choice>
        );
    }
});

module.exports = WordChoice;