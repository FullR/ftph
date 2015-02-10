var React = require("react");

var Owl = React.createClass({
    mixins: [require("mixins/class-names")],
    render: function() {
        var className = this.classNames(
            "owl",
            `owl-${this.props.state}`,
            this.props.centered ? "owl-centered" : null,
            this.props.hidden   ? "owl-hidden"   : null,
            this.props.onClick  ? "selectable"   : null
        );

        return (
            <div {...this.props} className={className}>
                <div className='owl-image'/>
                <div className='owl-content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = Owl;