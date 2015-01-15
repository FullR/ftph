"use strict";

var _ = require("lodash"),
    Bacon = require("baconjs"),
    soundManager = require("sound/sound-manager");

function Word(id, type, options) {
    this.id = id;
    this.key = id;
    this.listeners = [];
    this.type = type;
    this.sound = soundManager.get("assets/audio/words/" + type + "-words/" + id);
    this.playing = false;
    this.hidden = true; // invisible
    this.detached = false; // invisible and removed from the page's flow
    //this.sound.load();

    this.stream = new Bacon.Bus();
    _.extend(this, options || {});
    _.bindAll(this);
}

_.extend(Word.prototype, {
    set: function(key, value) {
        this[key] = value;
        this.update();
    },

    play: function(delay) {
        this.playing = true;
        this.update();

        return this.sound.play(delay)
            .then(this.set.bind(this, "playing", false));
    },

    detach: function() {
        this.set("detached", true);
    },

    attach: function() {
        this.set("detached", false);
    },

    select: function() {
        this.set("selected", true);
    },

    deselect: function() {
        this.set("selected", false);
    },

    stop: function() {
        this.sound.stop();
        this.set("playing", false);
    },

    hide: function() {
        this.set("hidden", true);
    },

    reveal: function() {
        this.set("hidden", false);
    },

    update: function() {
        this.stream.push(this);
    },

    getMixin: function() {
        var stream = this.stream,
            stopListening;

        return {
            componentDidMount: function() {
                stopListening = stream.onValue(this.forceUpdate);
            },

            componentWillUnmount: function() {
                stopListening();
            }
        };
    }
});

module.exports = Word;