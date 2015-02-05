"use strict";

var lessons = require("./lessons");

module.exports = {
    get: function(id) {
        return lessons[id] || null;
    }
};