var React = require("react");
var dnd = require("react-dnd");
var soundManager = require("sound/sound-manager");

var Choice = React.createClass({
    mixins: [require("mixins/class-names"), dnd.DragDropMixin],

    statics: {
        configureDragDrop(register) {
            register("letter", {
                dropTarget: {
                    acceptDrop(component, item) {
                        if(component.props.onDrop) {
                            component.props.onDrop(item);
                        }
                    }
                }
            });
        }
    },

    getInitialState() {
        return {
            playingSound: false
        };
    },

    // On mount, watch the passed sound for play/end events
    componentDidMount() {
        var sound = this.getSound();
        var unsubs = [];

        if(sound) {
            unsubs.push(sound.on("play", () => {
                if(this.isMounted()) {
                    this.state.playingSound = true;
                    this.setState(this.state);
                }
            }));

            unsubs.push(sound.on("end", () => {
                if(this.isMounted()) {
                    this.state.playingSound = false;
                    this.setState(this.state);
                }
            }));

            this.unsubs = unsubs;
        }
    },

    // On unmount, stop watch the passed sound events
    componentWillUnmount() {
        var unsubs = this.unsubs;
        if(unsubs) {
            unsubs.forEach((unsub) => unsub());
        }
    },

    getSound() {
        if(this.props.sound) {
            return this.props.sound;
        }
        else if(this.props.path) {
            return soundManager.get(this.props.path);
        }
    },

    render() {
        var sound = this.getSound(),
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
        if(this.props.detached) return (<div style={{display: "none", position: "absolute"}}/>);
        return (
            <div {...this.dropTargetFor("letter")} key={this.props.key} className={classNames}>
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