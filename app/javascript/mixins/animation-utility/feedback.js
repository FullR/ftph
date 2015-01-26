"use strict";

/*
    Mixin for activity feedback animations
*/
var feedbackAnimationMixin = {
    hideContinueButton: function() {
        this.state.hidingContinueButton = true;
        this.setState(this.state);
    },

    showContinueButton: function() {
        this.state.hidingContinueButton = false;
        this.setState(this.state);
    }
};

module.exports = feedbackAnimationMixin;