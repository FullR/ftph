"use strict";

var React    = require("react"),
    history  = require("router/actions").history,
    navigate = history.navigate.bind(history);

var Link = React.createClass({
    render: function() {
        var to = this.props.to;
        this.props.onClick = go;

        function go() {
            navigate(to, {trigger: true});
        }

        return (<span {...this.props}>{this.props.children}</span>);
    }
});

Link.to = function(to) {
    navigate(to, {trigger: true});
};

Link.back = function() {
    history.history.back();
};

module.exports = Link;