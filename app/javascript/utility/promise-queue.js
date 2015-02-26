

var _     = require("lodash"),
    Q     = require("q"),
    slice = [].slice;

/*
    Takes an array of functions and evaluates them in series
    If a passed function returns a promise, the queue waits until the promise
    resolves before continuing to the next promise.

    Returns a control object with these methods:
        start: Starts the evaluation of the queue functions. Returns a promise that resolves when the queue finishes.
        stop: Removes all elements from the queue and resolves the promise returned by `#start` and `#getPromise`.
        getPromise: Returns queue"s promise.
*/
function PromiseQueue(promiseFns) {
    var deferred = Q.defer();
    promiseFns = _.compact(_.flatten(promiseFns)); // Flatten and remove falsy values (cloning is also a good side effect to avoid mutation when shifting later)

    // shift the next step function off of `promiseFns`
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
        // start the promise queue and return a promise that resolves when it finishes/stops
        start: function() {
            next();
            return deferred.promise;
        },

        // stop the promise queue and resolve its deferred promise
        stop: function() {
            promiseFns = [];
            deferred.resolve();
        },

        // Utility method for retrieving the deferred promise
        getPromise: function() {
            return deferred.promise;
        }
    };
}

module.exports = PromiseQueue;