module.exports = function then(key, ...args) {
    return function() {
        if(typeof(key) === "function") {
            return key.apply(null, args);
        }
        else {
            return this[key].apply(this, args);
        }
    }.bind(this);
};
