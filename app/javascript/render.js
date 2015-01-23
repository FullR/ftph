"use strict";

var React = require("react"),
    outlet = document.getElementById("outlet");

module.exports = function(Component, options) {
    React.render(<Component {...options}/>, outlet);
};