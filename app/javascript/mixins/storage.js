var _     = require("lodash"),
    store = require("storage");

/*
    Exposes a save and load method for
    persisting to local storage
*/
var storageMixin = {
    /*
        Load data from localstorage at the passed key
        If a default value is passed and the retrieved 
        data is falsy, the defaultValue will be saved 
        and returned
    */
    load: function(key, defaultValue) {
        var data = store.get(key);

        if(!data && defaultValue) {
            //console.log("Saving default value", key,defaultValue);
            data = defaultValue;
            store.set(key, _.cloneDeep(data));
        }

        return data;
    },

    /*
        Saves the passed value at the passed key in
        local storage
    */
    save: function(key, value) {
        store.set(key, value);
    },

    merge: function(source) {
        store.merge(source);
    }
};

module.exports = storageMixin;