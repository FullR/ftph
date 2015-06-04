var React = require("react");

var AdminButton = React.createClass({
    renderCheckScreen() {
        var AdminCheck = require("screens/admin/admin-check"),
            render     = require("render");

        render(<AdminCheck/>);
    },

    render() {
        return (
            <div className="admin-button" onClick={this.renderCheckScreen}>
                <img className="admin-button__icon" src="assets/images/lock-icon.png"/>
                <span className="admin-button__text">Admin/Score</span>
            </div>
        );
    }
});

module.exports = AdminButton;