"use strict";

var truthy = require("utility/functional/truthy"),
    slice = [].slice;


/*
    Mixin for providing classname utility methods
*/
var classNamesMixin = {

    /*
        Takes an arbitrary number of classnames, filters falsy values,
        and adds them to the passed classname property

        Example:
            Component is passed: className="foobar",
            the call to `this.classNames("fizz", "buzz", null, "flarp")`,
            in the render method will return:
            "foobar fizz buzz flarp"
    */
    classNames: function(...classNames) {
        return (this.props.className ? this.props.className + " " : "") + 
                classNames.filter(truthy).join(" ");
    }
};

module.exports = classNamesMixin;