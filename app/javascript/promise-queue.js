"use strict";

var _     = require("lodash"),
    Q     = require("q"),
	slice = [].slice;

function PromiseQueue(promiseFns) {
    var deferred = Q.defer();
    promiseFns = _.compact(_.flatten(promiseFns));

    function next() {
        if(promiseFns.length === 0) {
            deferred.resolve();
        }
        else {
            Q.resolve()
                .then(promiseFns.shift() || _.noop)
                .then(next);
        }
    }
    
    return {
        stop: function() {
            promiseFns = [];
            deferred.resolve();
        },

        start: function() {
            next();
            return deferred.promise;
        },

        getPromise: function() {
            return deferred.promise;
        }
    };
}

module.exports = PromiseQueue;