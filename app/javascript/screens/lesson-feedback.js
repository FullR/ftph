"use strict";

var React       = require("react"),
    _           = require("lodash"),
    AdminButton = require("components/admin-button"),
    store = require("storage");

var LessonFeedback = React.createClass({
    componentDidMount: function() {
        store.markLessonCompleted(this.props.id);
    },

    render: function() {
        var activities  = _.values(this.props.lessonData.activities || {}),
            score   = activities.filter(function(activity) { return activity && activity.correct; }).length,
            percent = Math.floor((score / activities.length) * 100),
            next    = this.props.next || "lesson/" + ((+this.props.id) + 1),
            prev    = this.props.prev || "lesson/" + this.props.id;

        return (
            <div className='lesson-feedback'>
                <h1>{this.props.title} Complete!</h1>
                <h2>Lesson {this.props.id}</h2>
                <p className='score'>
                    Score {percent}%
                    <br/>
                    {score}/{activities.length}
                </p>
                {percent >= 85 ?
                    <div className='lesson-feedback-next'><button></button></div> :
                    <div className='lesson-feedback-prev'><button></button></div>
                }
                <AdminButton />
            </div>
        );
    }
});

module.exports = LessonFeedback;