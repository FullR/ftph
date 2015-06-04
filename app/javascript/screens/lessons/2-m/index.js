var React = require("react");
var Lesson2SubLesson = require("screens/lessons/2/sublesson");

var Lesson2m = React.createClass({
    render: function() {
        return (
            <Lesson2SubLesson
                activities={require("./activities")}
                phonic="m"
                phonicFilename="mmh"
                choices={[
                    {word: "ham"},
                    {word: "gum"}
                ]}/>
        );
    }
});

module.exports = Lesson2m;