"use strict";

var React       = require("react"),
    _           = require("lodash"),
    Link        = require("components/utility/link"),
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
        console.log(activities);
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
                    <Link to={next} className='lesson-feedback-next'><button></button></Link> :
                    <Link to={prev} className='lesson-feedback-prev'><button></button></Link>
                }
                <AdminButton />
            </div>
        );
    }
});

module.exports = LessonFeedback;