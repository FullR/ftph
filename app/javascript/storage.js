var _ = require("lodash");
var Store = require("putainde-localstorage");
var deepGet = require("utility/deep-get");
var deepSet = require("utility/deep-set");
var initStorage = require("initial-storage");
var namespace = require("../project").namespace;
var ls = Store.create({namespace: namespace});
var version = "1.0.34";

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
    getModel() {
        return modelData;
    },

    set(key, value) {
        if(typeof key === "string" || _.isArray(key)) {
            deepSet(modelData, key, value);
        }
        else {
            _.extend(modelData, key);
        }
        save();
    },

    get(key) {
        return deepGet(modelData, key);
    },

    merge(source) {
        _.merge(modelData, source);
        save();
    },

    save: save,
    reset: reset
};