"use strict";

var Q = require("q");

function applyMediaPolyfill() {
	var noop = function() {},
		Howl;

	function MediaPollyfill(url, onFinishPlaying, onErrorPlaying, onPlayingStatus) {
		this.url = url;
		this.onFinishPlaying = onFinishPlaying || noop;
		this.onErrorPlaying = onErrorPlaying || noop;
		this.onPlayingStatus = onPlayingStatus || noop;
	}

	if(!window.Media) {
		console.log("Applying media polyfill");
		Howl = require("howler").Howl;

		MediaPollyfill.prototype = {
			load: function() {
				var deferred = Q.defer();

				this.sound = new Howl({
					urls: 		 [this.url],
					autoplay: 	 false,
					volume: 	 1,
					onend: 		 this.onFinishPlaying,
					onload: 	 deferred.resolve,
					onloaderror: deferred.reject
				});

				return deferred.promise;
			},

			stop: function() {
				this.sound.stop();
			},

			play: function() {
				this.sound.play();
			},

			release: function() {
				
			}

		};

		window.Media = MediaPollyfill;
	}
	return window.Media;
}

module.exports = applyMediaPolyfill;