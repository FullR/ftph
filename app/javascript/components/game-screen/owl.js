var React = require("react");

var Owl = React.createClass({
    mixins: [require("mixins/class-names")],

    render: function() {
        var classNames = this.classNames(
            "owl",
            `owl--${this.props.state}`,
            this.props.centered ? "owl--centered" : null,
            this.props.hidden   ? "owl--hidden"   : null,
            this.props.onClick  ? "selectable"   : null
        );

        return (
            <div {...this.props} className={classNames}>
                <div className='owl__image'/>
                <div className='owl__content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = Owl;