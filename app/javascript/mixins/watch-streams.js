"use strict";

var _ = require("lodash"),
    slice = [].slice;

module.exports = {
    watch: function(/*...streams*/) {
        this.__stopListening = _.flatten(_.values(arguments)).reduce(function(stream, current) {
            return stream.merge(current);
        }).onValue(function() {
            this.setState(this.state);
        }.bind(this));
    },

    componentDidMount: function() {
        if(this.getStreams) {
            this.watch(this.getStreams());
        }
    },

    componentWillUnmount: function() {
        if(this.__stopListening) {
            this.__stopListening();
        }
    }
};