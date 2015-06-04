var React = require("react");
var WordImage = require("components/game-screen/word-image");
var Choice = require("components/game-screen/choice");
var soundManager = require("sound/sound-manager");

var WordChoice = React.createClass({
    render() {
        var sound = soundManager.get(`words/${this.props.screenType}-words/${this.props.word}`);
        return (
            <Choice {...this.props} sound={sound}>
                <WordImage word={this.props.word} disableHCenter={true} />
            </Choice>
        );
    }
});

module.exports = WordChoice;