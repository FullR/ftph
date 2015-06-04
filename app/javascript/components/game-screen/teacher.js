var React = require("react");

var Teacher = React.createClass({
    mixins: [require("mixins/class-names")],
    render() {
        var className = this.classNames(
            "teacher",
            `teacher--${this.props.state}`,
            this.props.centered ? "teacher--centered" : null,
            this.props.hidden   ? "teacher--hidden"   : null,
            this.props.onClick  ? "selectable"       : null
        );

        return (
            <div {...this.props} className={className}>
                <div className="teacher__image"/>

                <div className="teacher__content">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = Teacher;