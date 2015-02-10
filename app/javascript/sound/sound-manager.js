var Q     = require("q"),
    _     = require("lodash"),
    Sound = require("./sound");

var sounds = [],
    soundIndex = {};

function get(path) {
    var sound;

    path = `assets/audio/${path}`;

    if(soundIndex[path]) { return soundIndex[path]; }

    sound = new Sound({path: path});

    sounds.push(sound);
    soundIndex[path] = sound;

    return sound;
}

var soundManager = {
    get: get,

    stop: function() {
        return Q.all(sounds.map(function(sound) {
            return sound.stop();
        }));
    }
};

module.exports = soundManager;