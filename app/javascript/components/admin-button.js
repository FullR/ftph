"use strict";

var React = require("react"),
    render = require("render"),
    AdminCheck = require("screens/admin/admin-check");

var AdminButton = React.createClass({
    renderCheckScreen: function() {
        render(AdminCheck, {section: this.props.section, backComponent: this.props.backComponent});
    },

    render: function() {
        return (
            <div className='admin-button' onClick={this.renderCheckScreen}>
                <img className='admin-button-icon' src='assets/images/lock-icon.png'/>
                <span>Admin/Score</span>
            </div>
        );
    }
});

module.exports = AdminButton;