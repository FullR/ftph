var Q = require("q"),
    _ = require("lodash"),
    normalize = require("../polyfills/cordova/normalize-sound-ext");

function Sound(options) {
    _.extend(this, options);
    _.bindAll(this);
}

_.extend(Sound.prototype, {
    getNormalizedPath: function() {
        return normalize.path(this.path) + "." + normalize.audioExtention;
    },

    load: function() {
        var media = new window.Media(this.getNormalizedPath(), 
                                     this._finishedPlaying.bind(this), 
                                     this._finishedPlaying.bind(this)),
            loadPromise;
        
        this.media = media;
        this.loading = true;

        if(media.load) {
            loadPromise = media.load().then(function() {
                return this;
            }.bind(this));
        }
        else {
            loadPromise = Q.resolve(this);
        }

        return loadPromise.then(function() {
            this.loading = false;
            this.loaded = true;
            return this;
        }.bind(this));
    },

    _finishedPlaying: function(stopped) {
        var deferred = this.deferred;
        this.playing = false;
        
        if(deferred) {
            deferred.resolve();
            this.deferred = null;
            return deferred.promise;
        }

        return Q.resolve();
    },

    play: function() {
        this.playing = true;

        return this.stop().then(function() {
            var deferred = Q.defer();

            this.deferred = deferred;
            this.playing = true;
            this.media.play();

            return deferred.promise;
        }.bind(this)).then(function() {
            this.playing = false;
        }.bind(this));
    },

    stop: function() {
        if(this.deferred) {
            this.media.stop();
            return this._finishedPlaying();
        }
        return Q.resolve();
    },

    release: function() {
        if(this.media) {
            this.media.release();
        }
    }
});


module.exports = Sound;