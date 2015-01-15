"use strict";

var Q = require("q");

function applyMediaPolyfill() {
    var noop = function() {},
        HowlerModule,
        Howl;

    function MediaPollyfill(url, onFinishPlaying, onErrorPlaying, onPlayingStatus) {
        this.url = url;
        this.onFinishPlaying = onFinishPlaying || noop;
        this.onErrorPlaying = onErrorPlaying || noop;
        this.onPlayingStatus = onPlayingStatus || noop;
    }

    if(!window.Media) {
        HowlerModule = require("howler");
        Howl = HowlerModule.Howl;
        Howler = HowlerModule.Howler;


        MediaPollyfill.prototype = {
            load: function() {
                var deferred = Q.defer();

                this.sound = new Howl({
                    urls:        [this.url],
                    autoplay:    false,
                    volume:      1,
                    onend:       this.onFinishPlaying,
                    onload:      deferred.resolve,
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

        MediaPollyfill.mute = function() {
            Howler.mute();
        };

        MediaPollyfill.unmute = function() {
            Howler.unmute();
        };

        window.Media = MediaPollyfill;
    }
    return window.Media;
}

module.exports = applyMediaPolyfill;