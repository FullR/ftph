var React = require("react"),
    Q = require("q"),
    soundManager = require("sound/sound-manager");

var Sound = React.createClass({
    componentWillMount: function() {
        this.sound = soundManager.get(this.props.path);

        this.sound.load().then(() => {
            if(this.props.autoplay) {
                this.sound.play();
            }
        });
    },

    componentWillUnmount: function() {
        if(this.sound) {
            soundManager.release(this.sound);
        }
    },

    play: function() {
        if(this.isMounted()) {
            return this.sound.play();
        }
    },

    render: function() {
        return <div style={{display: "none"}}/>;
    }
});

module.exports = Sound;
