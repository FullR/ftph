"use strict";

var React = require("react"),
    Owl = require("components/owl");

module.exports = {
    renderLesson: function() {
        return (
            <div>
                {this.getChoices()}
            </div>
        );
    }
};