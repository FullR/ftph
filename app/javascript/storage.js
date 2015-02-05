"use strict";

var _           = require("lodash"),
    Store       = require("putainde-localstorage"),
    deepGet     = require("utility/deep-get"),
    deepSet     = require("utility/deep-set"),
    initStorage = require("initial-storage"),
    namespace   = require("../project").namespace,
    ls          = Store.create({namespace: namespace}),
    version     = "1.0.9";


var modelData = ls.get("application");

if(!modelData || modelData.version !== version) {
    console.log("Clearing invalid storage");
    reset();
}

function save() {
    ls.set("application", modelData);
}

function reset() {
    modelData = initStorage(version);
    save();
}

module.exports = {
    getModel: function() {
        return modelData;
    },

    set: function(key, value) {
        if(typeof key === "object") {
            _.extend(modelData, key);
        }
        else {
            deepSet(modelData, key, value);
        }
        save();
    },

    get: function(key) {
        return deepGet(modelData, key);
    },

    merge: function(source) {
        _.merge(modelData, source);
        save();
    },

    save: save,
    reset: reset
};