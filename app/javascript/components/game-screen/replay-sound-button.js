var React = require("react");
var _ = require("lodash");
var Sound = require("components/utility/sound");

var ReplaySoundButton = React.createClass({
    play() {
        this.refs.sound.play();
    },

    render() {
        var style = _.extend({
            width: 32,
            height: 32,
            backgroundImage: "url('assets/images/replay-button')",
            backgroundSize: "100% 100%"
            cursor: "pointer",
            zIndex: 3
        }, this.props.style);

        return (
            <div {...this.props} style={style} onClick={this.play}>
                <Sound ref="sound" path={this.props.path}/>
            </div>
        );
    }
});

module.exports = ReplaySoundButton;