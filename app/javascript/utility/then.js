"use strict";

var slice = [].slice;

module.exports = function(key /*, ...args*/) {
    var args = slice.call(arguments, 1);
    return function() {
        if(typeof(key) === "function") {
            return key.apply(null, args);
        }
        else {
            return this[key].apply(this, args);
        }
    }.bind(this);
};