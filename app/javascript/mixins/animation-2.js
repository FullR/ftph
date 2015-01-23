"use strict";

var Q            = require("q"),
    PromiseQueue = require("utility/promise-queue"),
    slice        = [].slice;

/*
    A mixin for starting/stopping/replaying animation functions

    Animation functions return an array of functions that are 
    to be executed in sequence using promises
*/
var animationMixin = {
    getInitialState: function() {
        return {
            animating: false
        };
    },

    /*
        Takes a function or method name and a variable number of arguments
        and returns a function that when invoked, executes the passed function

        The input function can also be a string referring to method in the current context
    */
    then: function(fn /*, ...args*/) {
        var args = slice.call(arguments, 1),
            fnString;

        if(typeof fn === "string") {
            if(this[fn]) {
                fnString = fn;
                fn = this[fn];
            }
            else {
                throw new Error("Method not found: " + fn);
            }
        }

        return function() {
            if(fnString) { console.log("Running " + fnString); };
            return fn.apply(null, args);
        }.bind(this);
    },

    /*
        Runs the passed animation function
    */
    animate: function(animation) {
        var animationFn;
        // allow passing function names instead of functions
        if(typeof animation === "string") {
            animationFn = this[animation];

            if(!animationFn) {
                throw new Error("Could not find animation: " + animation);
            }
        }
        else {
            animationFn = animation;
        }

        if(this.animationQueue) {
            this.animationQueue.getPromise() // wait until current animation has finished stopping
                .then(playAnimation.bind(this));

            this.stopAnimation();
        }
        else {
            playAnimation.call(this);
        }

        // Updates component state and runs the promise queue
        function playAnimation() {
            this.animationQueue = PromiseQueue(animationFn(this.then));

            this.state.animating = true;
            this.setState(this.state);

            return this.animationQueue.start().then(function() {
                this.animationQueue = null;
                this.state.animating = false;
                this.setState(this.state);
            }.bind(this));
        }
    },

    stopAnimation: function() {
        if(this.animationQueue) {
            this.animationQueue.stop();
        }
    },

    // utility wait function
    wait: function(ms) {
        var deferred = Q.defer();
        setTimeout(deferred.resolve, ms);
        return deferred.promise;
    },

    // On mount, if an autoplay animation is set, play it
    componentDidMount: function() {
        if(this.autoplayAnimation) {
            this.animate(this.autoplayAnimation);
        }
    },

    // On unmount, stop any animations that may be playing
    componentWillUnmount: function() {
        this.stopAnimation();
    }
};

module.exports = animationMixin;