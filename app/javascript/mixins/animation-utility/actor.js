"use strict";

function ActorMixin(actorKey, initialState) {
    return {
        // Retrieve the actor object
        getActor: function() {
            return this.state[actorKey];
        },

        // Set a property on the actor object and render
        actorSet: function(key, value) {
            this.getActor()[key] = value;
            this.setState(this.state);
        },

        // Center the actor on screen
        centerActor: function() {
            this.actorSet("centered", true);
        },

        // Uncenter the actor on screen
        uncenterActor: function() {
            this.actorSet("centered", false);
        },

        // Hides the actor
        hideActor: function() {
            this.actorSet("hidden", true);
        },

        // Reveals the actor
        revealActor: function() {
            this.actorSet("hidden", false);
        },

        // Have the actor speak while the sound corresponding to the sound id is playing
        // Requires the sound-container mixin to function
        say: function(soundId) {
            if(!this.play) { throw new Error("Missing sound container mixin"); }

            this.actorSet("state", "speaking");

            return this.play(soundId)
                .then(this.actorSet.bind(this, "state", "speaking-closed"));
        },

        // Same as #say except sayRef plays a sound on a child element (such as a choice)
        sayRef: function(refKey, soundId) {
            if(!this.playRef) { throw new Error("Missing sound container mixin"); }

            this.actorSet("state", "speaking");

            return this.playRef(refKey, soundId)
                .then(this.actorSet.bind(this, "state", "speaking-closed"));
        },

        // Have the actor sit down
        sit: function() {
            this.actorSet("state", "sitting");
        }
    };
}

module.exports = ActorMixin;