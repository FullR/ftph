var React = require("react");
var Q = require("q");

function wait(ms) {
    return Q.promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

var AudioTest = React.createClass({
    mixins: [require("mixins/extend-state")],

    getInitialState() {
        return {
            files: [],
            timeline: [],
            delayInput: 0
        };
    },

    uploadFiles(event) {
        this.extendState({
            files: this.state.files.concat(Array.prototype.slice.call(event.target.files || []))
        });
    },

    play(filename, file) {
        return Q.promise((resolve) => {
            var domnode = this.refs[filename].getDOMNode();
            domnode.src = URL.createObjectURL(file);
            domnode.play();
            domnode.onended = resolve;
        });
    },

    addDelay() {
        var ms = this.state.delayInput;
        this.extendState({
            timeline: this.state.timeline.concat({
                text: "wait " + ms,
                fn: function() {
                    return wait(ms);
                }
            }),
            delayInput: 0
        });
    },

    addSound(filename, file) {
        this.extendState({
            timeline: this.state.timeline.concat({
                text: "play " + file.name,
                fn: function() {
                    return this.play(filename, file)
                }.bind(this)
            })
        });
    },

    removeTimelineObject(timelineObj) {
        this.extendState({
            timeline: this.state.timeline.filter((obj) => obj !== timelineObj)
        });
    },

    updateDelayInput(event) {
        this.extendState({
            delayInput: event.target.value
        });
    },

    playTimeline() {
        return this.state.timeline.reduce((promise, timelineObj) => promise.then(timelineObj.fn), Q.resolve());
    },

    clearTimeline() {
        this.extendState({
            timeline: []
        });
    },

    render() {
        return (
            <div>
                <input type="file" accept="audio/*" onChange={this.uploadFiles}/>
                {this.state.files.map((file, index) => (
                    <div>
                        <audio ref={"file-"+index}/>
                        <div style={{width: 300, textAlign: "center", display: "inline-block"}}>{file.name}</div>
                        <button onClick={this.play.bind(this, "file-"+index, file)}>Play</button>
                        <button onClick={this.addSound.bind(this, "file-"+index, file)}>Add</button>
                    </div>
                ))}

                <br/>
                <input type='number' min={0} value={this.state.delayInput} onChange={this.updateDelayInput}/>
                <button onClick={this.addDelay}>Add Delay</button>
                <br/>
                <div className='timeline' style={{border: "1px solid #333"}}>
                    {this.state.timeline.map((timelineObj) => {
                        return (
                            <button onClick={this.removeTimelineObject.bind(this, timelineObj)}>{timelineObj.text}</button>
                        );
                    })}
                </div>
                <button onClick={this.playTimeline}>Play timeline</button>
                <button onClick={this.clearTimeline}>Clear timeline</button>
            </div>
        );
    }
});

module.exports = AudioTest;