"use strict";

var React = require("react");

var noop = function() {};
var Timer = React.createClass({
    getInitialState: function() {
        return {
            remaining: this.props.seconds
        };
    },

    startTimer: function() {
        this.interval = setInterval(function() {
            if(this.state.remaining <= 1) {
                (this.props.onComplete || noop)();
                this.stopTimer();
            }
            else {
                this.setState({
                    remaining: this.state.remaining - 1
                });
            }
        }.bind(this), 1000);
    },

    stopTimer: function() {
        if(this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    },

    componentDidMount: function() {
        this.startTimer();
    },

    componentWillUnmount: function() {
        this.stopTimer();
    },

    render: function() {
        return (
            <span className='timer'>{this.state.remaining}</span>
        );
    }
});

module.exports = Timer;