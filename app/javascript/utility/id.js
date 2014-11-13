"use strict";

var counter = 0;

module.exports = function() {
    var _id = (new Date()).valueOf() + ("" + counter);
    counter++;
    return _id;
};