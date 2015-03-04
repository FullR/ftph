var React = require("react");

var Choice = React.createClass({
    mixins: [require("mixins/class-names")],

    getInitialState: function() {
        return {
            playingSound: false
        };
    },

    // On mount, watch the passed sound for play/end events
    componentDidMount: function() {
        var sound = this.props.sound;

        if(sound) {
            sound.on("play", () => {
                if(this.isMounted()) {
                    this.state.playingSound = true;
                    this.setState(this.state);
                }
            });

            sound.on("end", () => {
                if(this.isMounted()) {
                    this.state.playingSound = false;
                    this.setState(this.state);
                }
            });
        }
    },

    // On unmount, stop watch the passed sound events
    componentWillUnmount: function() {
        var sound = this.props.sound;
        if(sound) {
            sound.off("play");
            sound.off("end");
        }
    },

    render: function() {
        var sound = this.props.sound,
            classNames = this.classNames(
                "choice", 
                this.state.playingSound ? "choice--sound-playing" : null, 
                this.props.selected     ? "choice--selected"      : null,
                this.props.hidden       ? "choice--hidden"        : null,
                this.props.detached     ? "choice--detached"      : null,
                this.props.onClick      ? "choice--selectable"    : null
            );

        // Do nothing if there is no sound or if sound is currently playing
        // Otherwise, play the sound
        var onReplayClick = (!sound || this.state.playingSound) ? null : sound.play.bind(sound);

        return (
            <div key={this.props.key} className={classNames}>
                <div className="choice__content" onClick={this.props.onClick}>
                    {this.props.children}
                </div>

                {sound && !this.props.soundDisabled ? 
                    <button 
                        className="choice__play-button" 
                        onClick={onReplayClick} /> :
                    null
                }
            </div>
        );
    }
});

module.exports = Choice;