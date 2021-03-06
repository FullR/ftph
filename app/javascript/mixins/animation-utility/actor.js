// Mixin for handling owl/teacher animation steps
function ActorMixin(actorKey, initialState) {
    return {
        // Change the current target of the actor methods
        changeActor(newActorKey) {
            actorKey = newActorKey;
        },

        // Retrieve the actor object
        getActor() {
            return this.state[actorKey];
        },

        // Set a property on the actor object and render
        actorSet(key, value) {
            if(this.isMounted()) {
                this.getActor()[key] = value;
                this.setState(this.state);
            }
        },

        // Center the actor on screen
        centerActor() {
            this.actorSet("centered", true);
        },

        // Uncenter the actor on screen
        uncenterActor() {
            this.actorSet("centered", false);
        },

        // Hides the actor
        hideActor() {
            this.actorSet("hidden", true);
        },

        // Reveals the actor
        revealActor() {
            this.actorSet("hidden", false);
        },

        // Have the actor speak while the sound corresponding to the sound id is playing
        // Requires the sound-container mixin to function
        say(soundId) {
            if(!this.play) { throw new Error("Missing sound container mixin"); }

            this.actorSet("state", "speaking");

            return this.play(soundId)
                .then(this.actorSet.bind(this, "state", "speaking-closed"));
        },

        // Have the actor sit down
        sit() {
            this.actorSet("state", "sitting");
        },

        // Have the actor stand up
        stand() {
            this.actorSet("state", "speaking-closed");
        },

        // Returns the correct callback for handling the actor being clicked
        // null if the animation is currently running
        // and the animate method bound to the passed animation otherwise
        animationCallback(animation) {
            if(this.state.animating) {
                return null;
            }
            else {
                return this.animate.bind(this, animation);
            }
        }
    };
}

module.exports = ActorMixin;