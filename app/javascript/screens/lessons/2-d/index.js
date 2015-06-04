var React = require("react");
var Lesson2SubLesson = require("screens/lessons/2/sublesson");

var Lesson2d = React.createClass({
    render: function() {
        return (
            <Lesson2SubLesson
                activities={require("./activities")}
                phonic="d"
                phonicFilename="dh"
                choices={[
                    {word: "kid"},
                    {word: "bed"}
                ]}/>
        );
    }
});

module.exports = Lesson2d;