"use strict";

/*
    Retrieves a deeply nested property from an object.

    Example:
        var a = {foo: {bar: {fizz: "buzz"}}};
        deepGet(a, "foo.bar.fizz") === "buzz"
*/
function deepGet(obj, keys) {
    return keys.split(".").reduce(function(target, key) {
        return (target || {})[key];
    }, obj);
}

module.exports = deepGet;