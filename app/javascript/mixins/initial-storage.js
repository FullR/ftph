var storage = require("storage");

module.exports = function(namespace) {
    return {
        componentWillMount: function() {
            if(!storage.get(namespace) && this.getInitialStorage) {
                storage.set(namespace, this.getInitialStorage());
            }
        }
    };
};