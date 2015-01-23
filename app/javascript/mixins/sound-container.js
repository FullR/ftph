"use strict";

var _            = require("lodash"),
    Q            = require("q"),
    soundManager = require("sound/sound-manager");


/*
    Manages sounds for a given component. 
    Sound files are loaded when the component is mounted
    and released when the component is unmounted.
*/
var soundContainer = {
    getInitialState: function() {
        return {
            playingSound: false
        };
    },

    /*
        Transforms path strings into sound objects
    */
    resolveSounds: function() {
        if(!this._soundsResolved) {
            this._soundsResolved = true;
            this.sounds = _.transform(this.getSounds ? this.getSounds() : {}, function(resolved, path, id) {
                resolved[id] = soundManager.get(path);
            });
        }
        return this.sounds;
    },

    /*
        Returns the sound object with the given id
    */
    getSound: function(id) {
        return (this.resolveSounds() || {})[id];
    },
    
    /*
        Plays the sound object with the given id. If sound isn't loaded, it is loaded.

        Returns a promise that is resolved when the sound finishes playing.
    */
    play: function(id) {
        return this.loadSounds()
            .then(function() {
                var sounds = this.sounds;
                if(!sounds[id]) {
                    return Q.reject("Cannot find sound with id: " + id);
                }

                this.state.playingSound = true;
                this.setState(this.state);

                return sounds[id].play();
            }.bind(this))
            .then(function() {
                this.state.playingSound = false;
                this.setState(this.state);
            }.bind(this));
    },
    
    /*
        Stops all playing sounds. Retu
    */
    stopSounds: function() {
        if(this.sounds) {
            return Q.all(_.invoke(this.sounds, "stop"));
        }
        else {
            return Q.resolve();
        }
    },
    
    /*
        Resolves and loads all sounds
    */
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
    
    /*
        Releases all sounds
    */
    releaseSounds: function() {
        if(this.sounds) {
            _.invoke(this.sounds, "release");
            this._loadSoundsPromise = null;
        }
    },

    componentWillMount: function() {
        if(this.autoplaySound) {
            this.play(this.autoplaySound);
        }
        else {
            this.loadSounds();
        }
    },

    componentWillUnmount: function() {
        this.stopSounds()
            .then(this.releaseSounds);
    }
};

module.exports = soundContainer;