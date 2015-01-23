"use strict";

/*
    Set a deeply nested property in an object.
    If an intermediate property doesn't exist,
    it will be assigned a blank object.

    Example:
        var a = {foo: {bar: {fizz: "buzz"}}};
        deepSet(a, "foo.bar.fizz", "foobar");
        a.foo.bar.fizz === "foobar";
*/
function deepSet(obj, keys, value) {
    var last;
    keys = keys.split(".");
    keys.reduce(function(target, key) {
        last = target;
        if(!target[key]) target[key] = {};
        return target[key];
    }, obj);
    last[keys[keys.length-1]] = value;
}

module.exports = deepSet;