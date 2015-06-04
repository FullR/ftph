var storage = require("storage");

module.exports = function(namespace) {
    return {
        componentWillMount() {
            if(!storage.get(namespace) && this.getInitialStorage) {
                storage.set(namespace, this.getInitialStorage());
            }
        }
    };
};