var React = require("react");
var WebLink = require("components/utility/web-link");

var TctcLogo = React.createClass({
    render() {
        return (
            <WebLink className="tctc-logo" href="http://criticalthinking.com/"/>
        );
    }
});

module.exports = TctcLogo;