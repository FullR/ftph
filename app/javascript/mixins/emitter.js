var Q = require("q");

/*
    Mixin for providing basic subscriber model
*/
var emitter = {
    // Alert subscribers to an event
    fire(eventId, event) {
        var listeners = this._listeners || (this._listeners = {}),
            listenerGroup = listeners[eventId];
        
        if(listenerGroup) {
            listenerGroup.forEach(function(listener) {
                listener(event);
            });
        }
    },
    
    // Subscribe to a events of a certain type
    on(eventId, callback) {
        this._listeners = this._listeners || {};
        this._listeners[eventId] = this._listeners[eventId] || [];
        this._listeners[eventId].push(callback);

        return () => {
            this.off(eventId, callback);
            callback = null;
        };
    },

    once(eventId, callback) {
        var unsubscribe = this.on(eventId, function(event) {
            unsubscribe();
            callback(event);
            callback = null;
        });
        return unsubscribe;
    },

    eventToPromise(eventId, errorEventId) {
        return Q.promise((resolve, reject) => {
            var unsubReject;
            var unsubResolve = this.once(eventId, (event) => {
                if(unsubReject) {
                    unsubReject();
                }
                resolve(event);
            });

            if(errorEventId) {
                unsubReject = this.once(errorEventId, (error) => {
                    unsubResolve();
                    reject(error);
                });
            }
        });
    },
    
    // Stop subscribing to events of a specific type
    off(eventId, callback) {
        var listenerGroup = this._listeners ? this._listeners[eventId] : null;
        if(listenerGroup) {
            listenerGroup.splice(listenerGroup.indexOf(callback), 1);
        }
    }
};

module.exports = emitter;