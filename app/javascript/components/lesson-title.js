"use strict";

var React = require("react");

var LessonTitle = React.createClass({
    render: function() {
        return (
            <div className='top-info'>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
});

module.exports = LessonTitle;