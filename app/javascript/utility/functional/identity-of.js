"use strict";

// Takes a value and returns a function that when called returns the passed value
function identityOf(v) {
    return function() {
        return v;
    };
}

module.exports = identityOf;