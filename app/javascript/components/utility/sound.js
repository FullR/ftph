var React = require("react");
var Q = require("q");
var soundManager = require("sound/sound-manager");

var Sound = React.createClass({
    isPlayable() {
        return true;
    },

    componentWillMount() {
        this.sound = soundManager.get(this.props.path);

        this.sound.load().then(() => {
            if(this.props.autoplay) {
                this.sound.play();
            }
        });
    },

    componentWillUnmount() {
        if(this.sound) {
            soundManager.release(this.sound);
        }
    },

    stop() {
        if(this.isMounted()) {
            return this.sound.stop();
        }
        else {
            return Q.resolve();
        }
    },

    play() {
        if(this.isMounted()) {
            return this.sound.play();
        }
        else {
            return Q.resolve();
        }
    },

    render() {
        return <div style={{display: "none"}}/>;
    }
});

module.exports = Sound;
