"use strict";

var React = require("react"),
    render = require("render");

var LessonArrow = React.createClass({
    render: function() {
        var nextComponent = this.props.next,
            options = this.props.nextProps;

        function onClick() {
            render(nextComponent, options);
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

module.exports = LessonArrow;