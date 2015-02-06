"use strict";

var _ = require("lodash");

/*
    Maps every value in a complex structure without changing 
    the shape of the structure
*/

function deepMap(fn, value, key, container) {
    if(_.isArray(value)) {
        return value.map(deepMap.bind(null, fn));
    }
    else if(_.isObject(value)) {
        return _.transform(value, function(result, value, key, container) {
            result[key] = deepMap(fn, value, key, container);
        });
    }
    else {
        return fn(value, key, container);
    }
}

module.exports = deepMap;