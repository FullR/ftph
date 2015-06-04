var _ = require("lodash");

module.exports = {
    extendState(source) {
        this.setState(_.extend({}, this.state, source));
    }
};