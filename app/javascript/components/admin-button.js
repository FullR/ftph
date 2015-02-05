"use strict";

var React      = require("react");

var AdminButton = React.createClass({
    renderCheckScreen: function() {
        var AdminCheck = require("screens/admin/admin-check"),
            render = require("render");

        render(<AdminCheck/>);
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