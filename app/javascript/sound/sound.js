var Q = require("q"),
	_ = require("lodash"),
	normalize = require("../polyfills/cordova/normalize-sound-ext");

function Sound(options) {
	_.extend(this, options);
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
			deferred.resolve({stopped: stopped});
			this.deferred = null;
			return deferred.promise;
		}
		else {
			return Q.resolve({stopped: stopped});
		}
	},

	play: function(delay) {
		this.playing = true;

		return this.stop().then(function() {
			var deferred = Q.defer();

			this.deferred = deferred;

			if(delay) {
				this.timeoutId = setTimeout(function delayTimeout() {
					this.timeoutId = null;
					this.playing = true;
					this.media.play();
				}.bind(this), delay);
			}
			else {
				this.playing = true;
				this.media.play();
			}

			return deferred.promise;
		}.bind(this)).then(function() {
			this.playing = false;
		}.bind(this));
	},

	stopAudio: function() {
		this.media.stop();
	},

	stopDelay: function() {
		var timeoutId = this.timeoutId;
		if(timeoutId) {
			clearTimeout(timeoutId);
			this.timeoutId = null;
		}
	},

	stop: function() {
		if(this.deferred) {
			this.stopDelay();
			this.stopAudio();
			return this._finishedPlaying(true).then(function() {});
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