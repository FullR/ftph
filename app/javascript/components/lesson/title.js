var React = require("react");

var Title = React.createClass({
    render: function() {
        return (
            <div className='lesson__title'>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
});

module.exports = Title;