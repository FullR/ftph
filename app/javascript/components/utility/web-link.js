var React = require("react");

var WebLink = React.createClass({
    render() {
        return (<a {...this.props} target="_blank">{this.props.children}</a>);
    }
});

module.exports = WebLink;
