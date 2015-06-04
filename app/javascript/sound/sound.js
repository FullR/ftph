var Q = require("q");
var _ = require("lodash");
var emitter = require("mixins/emitter");
var normalize = require("polyfills/cordova/normalize-sound-ext");
var Media = window.Media;

// Class for handling loading/releasing/playing/stopping sounds
class Sound {
    constructor(options) {
        _.bindAll(this);
        _.extend(this, options, {
            // full path correcting platform inconsistencies
            _fullPath: normalize.path(options.path) + "." + normalize.audioExtention,
            // cache the load promise. Cache is reset in the release function
            load: _.once(this._load),
            _isLoaded: false,
            _isLoading: false,
            _isPlaying: false
        });
        

        // Set flags
        this.on("load-start", () => {
            this._isLoaded = false;
            this._isLoading = true;
        });

        this.on("load", () => {
            this._isLoaded = true;
            this._isLoading = false;
        });

        this.on("release", () => {
            this.media = null;
            this._isLoaded = false;
            this._isLoading = false;
            this.load = _.once(this._load); // reset load function
        });

        this.on("play", () => {
            this._isPlaying = true;
        });

        this.on("end", () => {
            this._isPlaying = false;
        });
    }

    // Called when the sound finishes playing or is stopped
    _onEnd() {
        this.fire("end");
    }

    // create/return the load promise
    _load() {
        var path = this._fullPath;
        var onEnd = this._onEnd.bind(this);
        var media = this.media = new window.Media(path, onEnd, onEnd);

        this.fire("load-start");
        return media.load().then(() => {
            this.fire("load");
        });
    }

    // play the sound. returns a promise that resolves when the sound ends
    play() {
        return this.load() // load
            .then(() => {this.stop();}) // stop if playing
            .then(() => {
                this.fire("play");
                this.media.play();
                return this.eventToPromise("end");
            });
    }

    // stop the sound
    stop() {
        if(this.isPlaying() && this.media) {
            this.media.stop();
            this._onEnd();
        }
    }

    // release the sound data
    release() {
        if(this.media) {
            this.stop();
            this.media.release();
            this.fire("release");
        }
    }

    isPlaying() {
        return !!this._isPlaying;
    }

    isLoaded() {
        return !!this._isLoaded;
    }

    isLoading() {
        return !!this._isLoading
    }

    toString() {
        return `Sound (${this._fullPath})`;
    }
}

// make sounds event emitters
_.extend(Sound.prototype, emitter);

module.exports = Sound;