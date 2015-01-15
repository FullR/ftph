"use strict";

var React = require("react");

var Lesson6 = React.createClass({
    mixins: [ require("mixins/redirect")("lesson/6/activity/1") ]
});

module.exports = Lesson6;