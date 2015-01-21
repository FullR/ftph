"use strict";

var _ = require("lodash"),
    Q = require("q");

var soundContainer = {
    resolveSounds: function() {
        if(!this._soundsResolved) {
            this._soundsResolved = true;
            this.sounds = _.transform(this.sounds, function(resolved, path, id) {
                resolved[id] = getSound(path);
            });
        }
        return this.sounds;
    },
    
    play: function(id) {
        return this.loadSounds()
            .then(this.stop.bind(this))
            .then(function() {
                var sounds = this.sounds;
                if(!sounds[id]) {
                    return Q.reject("Cannot find sound with id: " + id);
                }
                return sounds[id].play();
            }.bind(this));
    },
    
    stop: function() {
        return _.invoke(this.sounds, "stop");
    },
    
    loadSounds: function() {
        var sounds;
        if(!this._loadSoundsPromise) {
            this.resolveSounds();
            sounds = this.sounds;
            this._loadSoundsPromise = Q.all(_.invoke(sounds, "load"))
                .then(function() {
                    return sounds;
                });
        }
        return this._loadSoundsPromise;
    },
    
    release: function() {
        _.invoke(this.sounds, "release");
        this._loadSoundsPromise = null;
    }
};

module.exports = soundContainer;