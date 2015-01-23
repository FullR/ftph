"use strict";

var displayHooks = {
    componentDidMount: function() {
        if(this.onShow) {
            this.onShow();
        }
    },

    componentWillUnmount: function() {
        if(this.onHide) {
            this.onHide();
        }
    }
};

module.exports = displayHooks;