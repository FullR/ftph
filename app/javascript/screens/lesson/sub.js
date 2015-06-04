var _ = require("lodash");
var React = require("react");
var WordLesson = require("screens/lesson/word");

var SubLesson = React.createClass({
    render() {
        return (
            <WordLesson {...this.props}/>
        );
    }
});

module.exports = SubLesson;