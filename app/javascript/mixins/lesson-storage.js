"use strict";

var _ = require("lodash"),
    truthy = require("utility/functional/truthy");

module.exports = function(namespace) {
    return {
        getActivities: function() {
            return _.values(this.load(namespace).activities);
        },

        getScore: function() {
            return _.pluck(this.getActivities(), "correct").filter(truthy).length;
        },

        getTotal: function() {
            return this.getActivities().length;
        },
    };
};