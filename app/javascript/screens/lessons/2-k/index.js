var React = require("react");
var Lesson2SubLesson = require("screens/lessons/2/sublesson");

var Lesson2k = React.createClass({
    render: function() {
        return (
            <Lesson2SubLesson
                activities={require("./activities")}
                phonic="k"
                phonicFilename="kh"
                choices={[
                    {word: "duck"},
                    {word: "lake"}
                ]}/>
        );
    }
});

module.exports = Lesson2k;