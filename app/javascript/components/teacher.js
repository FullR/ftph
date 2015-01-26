"use strict";

var React = require("react");

var Teacher = React.createClass({
    mixins: [require("mixins/class-names")],
    render: function() {
        var className = this.classNames(
            "teacher",
            "teacher-"+this.props.state,
            this.props.centered ? "teacher-centered" : null,
            this.props.hidden ? "teacher-hidden" : null,
            this.props.onClick ? "selectable" : null
        );

        this.props.className = className;

        return (
            <div {...this.props}>
                <div className='teacher-image'/>

                <div className='teacher-content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = Teacher;