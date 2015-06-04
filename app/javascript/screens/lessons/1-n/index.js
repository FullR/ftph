var React = require("react");
var Lesson1SubLesson = require("screens/lessons/1/sublesson");

var Lesson1n = React.createClass({
    render: function() {
        return (
            <Lesson1SubLesson
                activities={require("./activities")}
                phonic="n"
                phonicFilename="nnh"
                choices={[
                    {word: "nap"},
                    {word: "neck"}
                ]}/>
        );
    }
});

module.exports = Lesson1n;