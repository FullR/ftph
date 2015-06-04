var React = require("react");
var Q = require("q");
var _ = require("lodash");

var SoundGroup = React.createClass({
    play(id) {
        if(this.refs[id]) {
            return this.refs[id].play();
        }
        else {
            throw new Error("Sound not found: " + id);
        }
    },

    stop() {
        return Q.all(_.invoke(this.refs, "stop"));
    },

    render() {
        React.Children.forEach(this.props.children, (child) => {
            if(child.isPlayable()) {
                this.refs[child.props.id] = child;
            }
        });

        return (
            <div style={{display: "none"}}>
                {this.props.children}
            </div>
        );
    }
});

module.exports = SoundGroup;