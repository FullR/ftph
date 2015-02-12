var React   = require("react"),
    WebLink = require("components/utility/web-link");

var TctcLogo = React.createClass({
    render: function() {
        return (
            <WebLink className='tctc-logo' href='http://criticalthinking.com/'/>
        );
    }
});

module.exports = TctcLogo;