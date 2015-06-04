var React          = require("react");
var LessonFeedback = require("screens/lesson-feedback");
var lessonInfo     = require("./info");

module.exports = React.createClass({
    render: function() {
        return (
            <LessonFeedback
                title      = {lessonInfo.title}
                lessonId   = {lessonInfo.id}
                section    = {lessonInfo.section}
                nextScreen = {require("screens/lessons/8")}
                backScreen = {require("screens/lessons/7")}
                requiredPercent={75}/>
        );
    }
});