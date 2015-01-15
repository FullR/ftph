"use strict";

var React = require("react");

var Choice = React.createClass({
    mixins: [require("mixins/utility")],
    render: function() {
        var className = this.className(
            "choice", 
            this.props.playing  ? "choice-sound-playing" : null, 
            this.props.selected ? "choice-selected"      : null,
            this.props.hidden   ? "choice-hidden"        : null,
            this.props.detached ? "choice-detached"      : null,
            this.props.onClick  ? "choice-selectable"    : null
        );

        return (
            <div key={this.props.key} className={className}>
                <div className='choice-content' onClick={this.props.onClick}>
                    {this.props.children}
                </div>

                {this.props.sound && this.props.play ? 
                    <button className='choice-play-button' onClick={this.props.playing ? null : this.props.play}></button> :
                    null
                }
            </div>
        );
    }
});

module.exports = Choice;