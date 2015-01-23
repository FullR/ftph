"use strict";

var truthy = require("utility/functional/truthy"),
    slice = [].slice;

var classNamesMixin = {
    classNames: function() {
        return (this.props.className ? this.props.className + " " : "") + 
                slice.call(arguments).filter(truthy).join(" ");
    }
};

module.exports = classNamesMixin;