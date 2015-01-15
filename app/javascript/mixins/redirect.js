"use strict";

var Link = require("components/utility/link");

module.exports = function(to) {
    return {
        componentDidMount: function() {
            Link.to(to);
        },
        
        render: function() {
            return null;
        }
    };
};