"use strict";

var store = require("storage");

var storageMixin = {
    load: function(key, defaultValue) {
        var data = store.get(key);

        if(!data && defaultValue) {
            data = defaultValue;
            store.set(key, data);
        }

        return data;
    },

    save: function(key, value) {
        store.set(key, value);
    }
};

module.exports = storageMixin;