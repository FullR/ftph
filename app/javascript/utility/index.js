"use strict";

var _ = require("lodash"),
    Q = require("q");

function identity(v) { 
    return v; 
}

function identityOf(v) { 
    return identity.bind(this, v); 
}

function sum(a, b) { 
    return a + b; 
}

function pluck(key, obj) {
    return obj ? obj[key] : function(obj) {
        return obj[key];
    };
}

function max(a, b) {
    return a > b ? a : b;
}

function min(a, b) {
    return a < b ? a : b;
}

function last(arr) {
    return arr[arr.length - 1];
}

function asyncSeries(asyncFns) {
    return asyncFns.reduce(function(promise, asyncFn) {
        return promise.then(asyncFn);
    }, Q.resolve());
}

function isTruthy(v) {
    return !!v;
}

function isFalsy(v) {
    return !v;
}

module.exports = {
    identity, identityOf, 
    sum,
    pluck,
    max, min,
    last,
    asyncSeries
};