"use strict";

var React       = require("react"),
    LessonIndex = require("screens/lessons/lesson-index"),
    AdminButton = require("components/admin-button");

var LessonWrapper = React.createClass({
    render: function() {
        var Lesson = LessonIndex[this.props.lessonId];
        return (
            <div className='lesson-wrapper'>
                <Lesson />
                <AdminButton />
            </div>
        );
    }
});

module.exports = LessonWrapper;