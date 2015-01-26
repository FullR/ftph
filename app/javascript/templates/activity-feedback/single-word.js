"use strict";

var React        = require("react"),
    FeedbackWord = require("components/activity-feedback/feedback-word"),
    Teacher      = require("components/teacher"),
    AdminButton  = require("components/admin-button");

module.exports = function() {
    return (
        <div className='activity-feedback'>
            <Teacher {...this.state.teacher}/>
            <FeedbackWord word={this.props.selected.word} correct={this.props.selected.correct}/>
            <AdminButton/>
        </div>
    );
};