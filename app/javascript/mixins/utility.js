"use strict";

var _            = require("lodash"),
    soundManager = require("sound/sound-manager"),
    slice        = [].slice;

module.exports = {
    mergeState: function(source) {
        var state = _.clone(this.state);
        _.merge(state, source);
        this.setState(state);
    },

    className: function() {
        return (this.props.className || "") + " " + _.compact(slice.call(arguments)).join(" ");
    },

    extend: function(source) {
        return _.extend(_.clone(this), source);
    }
};