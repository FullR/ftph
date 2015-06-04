var React = require("react");
var Lesson1SubLesson = require("screens/lessons/1/sublesson");

var Lesson1s = React.createClass({
    render: function() {
        return (
            <Lesson1SubLesson
                activities={require("./activities")}
                phonic="s"
                phonicFilename="ss"
                choices={[
                    {word: "sit"},
                    {word: "sister"}
                ]}/>
        );
    }
});

module.exports = Lesson1s;