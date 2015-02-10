var React = require("react"),
    render = require("render");

var Arrow = React.createClass({
    render: function() {
        var NextComponent = this.props.next,
            options = this.props.nextProps;

        function onClick() {
            render(<NextComponent {...options} />);
        }

        return (
            <div className='lesson-arrow' onClick={onClick}>
                <div className='lesson-arrow-content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = Arrow;