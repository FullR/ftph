"use strict";

var React = require("react"),
    outlet = document.getElementById("outlet");

module.exports = function(component) {
    React.render(component, outlet);
};