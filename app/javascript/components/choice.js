"use strict";

var React = require("react");

var Choice = React.createClass({
    mixins: [
        require("mixins/classNames")
    ],

    getInitialState: function() {
        return {
            playingSound: false
        };
    },

    // On mount, watch the passed sound for play/end events
    componentWillMount: function() {
        var sound = this.props.sound;
        if(sound) {
            sound.on("play", function() {
                this.state.playingSound = true;
                this.setState(this.state);
            }.bind(this));

            sound.on("end", function() {
                this.state.playingSound = false;
                this.setState(this.state);
            }.bind(this));
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
            this.state.playingSound  ? "choice-sound-playing" : null, 
            this.props.selected ? "choice-selected"      : null,
            this.props.hidden   ? "choice-hidden"        : null,
            this.props.detached ? "choice-detached"      : null,
            this.props.onClick  ? "choice-selectable"    : null
        );

        // Do nothing if there is no sound or if sound is currently playing
        // Otherwise, play the sound
        var onReplayClick = (!sound || this.state.playingSound) ? null : sound.play.bind(sound);

        return (
            <div key={this.props.key} className={classNames}>
                <div className='choice-content' onClick={this.props.onClick}>
                    {this.props.children}
                </div>

                {sound && !this.props.soundDisabled ? 
                    <button 
                        className='choice-play-button' 
                        onClick={onReplayClick} /> :
                    null
                }
            </div>
        );
    }
});

module.exports = Choice;