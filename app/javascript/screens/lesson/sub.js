var _          = require("lodash"),
    React      = require("react"),
    WordLesson = require("screens/lesson/word");

var SubLesson = React.createClass({
    render: function() {
        return (
            <WordLesson {...this.props}/>
        );
    }
});

module.exports = SubLesson;