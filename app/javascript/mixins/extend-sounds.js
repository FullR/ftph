"use strict";

var _ = require("lodash");

var extendSoundsMixin = {
    getSounds: function() {
        if(this.getAdditionalSounds) {
            if(this.props.sounds) {
                return _.extend(_.clone(this.props.sounds), this.getAdditionalSounds());
            }
            else {
                return this.getAdditionalSounds();
            }
        }
        return this.props.sounds;
    }
};

module.exports = extendSoundsMixin;