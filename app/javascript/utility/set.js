"use strict";

var _ = require("lodash");

module.exports = function(key, value) {
    if(typeof key === "object") {
        _.extend(this, key);
    }
    else {
        this[key] = value;
    }

    if(this.update) {
        this.update(this);
    }
};