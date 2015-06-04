var React = require("react");
var Lesson1SubLesson = require("screens/lessons/1/sublesson");

var Lesson1m = React.createClass({
    render: function() {
        return (
            <Lesson1SubLesson
                activities={require("./activities")}
                phonic="m"
                phonicFilename="mmh"
                choices={[
                    {word: "mom"},
                    {word: "monkey"}
                ]}/>
        );
    }
});

module.exports = Lesson1m;