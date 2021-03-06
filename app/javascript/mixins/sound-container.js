var _ = require("lodash");
var Q = require("q");
var deepGet = require("utility/deep-get");
var deepMap = require("utility/deep-map");
var soundManager = require("sound/sound-manager");
var constant = require("utility/functional/constant");

function valuesDeep(obj) {
    var values = [];
    deepMap(function(value) { values.push(value); }, obj);
    return values;
}

/*
    Manages sounds for a given component. 
    Sound files are loaded when the component is mounted
    and released when the component is unmounted.
*/
var soundContainer = {
    getInitialState() {
        return {
            playingSound: false
        };
    },

    /*
        Transforms path strings into sound objects
    */
    resolveSounds() {
        var sounds = this.props.sounds ? _.cloneDeep(this.props.sounds) : {};
        var soundArray;

        if(!this._soundsResolved) {
            this._soundsResolved = true;
            if(this.getSounds) {
                _.merge(sounds, this.getSounds());
            }

            soundArray = [];
            this.sounds = deepMap(function(path, key) {
                var sound = soundManager.get(path);

                soundArray.push(sound);
                return sound;
            }, sounds);
            this.soundArray = soundArray;
        }

        return this.sounds;
    },

    /*
        Returns the sound object with the given id. 
        Throws an error if the sound isn"t found
    */
    getSound(id) {
        var sound = deepGet(this.resolveSounds() || {}, id);
        if(!sound) {
            throw new Error("Could not find sound with id: " + id);
        }
        return sound;
    },
    
    /*
        Plays the sound object with the given id. If sound isn"t loaded, it is loaded.
        Returns a promise that is resolved when the sound finishes playing.
    */
    play(id) {
        return this.loadSounds()
            .then(() => {
                var sound = this.getSound(id);

                if(this.isMounted()) {
                    this.state.playingSound = true;
                    this.setState(this.state);
                    return sound.play();
                }
            })
            .then(() => {
                if(this.isMounted()) {
                    this.state.playingSound = false;
                    this.setState(this.state);
                }
            });
    },
    
    /*
        Stops all playing sounds. Retu
    */
    stopSounds() {
        if(this.sounds) {
            return Q.all(_.invoke(this.soundArray, "stop"));
        }
        else {
            return Q.resolve();
        }
    },
    
    /*
        Resolves and loads all sounds
    */
    loadSounds() {
        var sounds;

        if(!this._loadSoundsPromise) {
            sounds = this.resolveSounds();

            this._loadSoundsPromise = Q.all(_.invoke(this.soundArray, "load"))
                .then(() => {
                    return sounds;
                }, (error) => {
                    console.log("Error loading sounds");
                    return sounds;
                });

            this._loadSoundsPromise = Q.all(this.soundArray.map((sound) => 
                sound.load().catch(() => Q.resolve())
            ))
                .then(() => {
                    return sounds;
                }, (error) => {
                    console.log("Error loading sounds");
                    return sounds;
                });
        }

        return this._loadSoundsPromise;
    },
    
    /*
        Releases all sounds
    */
    releaseSounds() {
        if(this.sounds) {
            _.invoke(this.soundArray, "release");
            this._loadSoundsPromise = null;
        }
    },

    componentWillMount() {
        this.loadSounds().then(() => {
            if(this.autoplaySound) this.play(this.autoplaySound);
        });
    },

    componentWillUnmount() {
        this.stopSounds()
            .then(this.releaseSounds);
    }
};

module.exports = soundContainer;