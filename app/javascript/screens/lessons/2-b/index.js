var React = require("react");
var Lesson2SubLesson = require("screens/lessons/2/sublesson");

var Lesson2b = React.createClass({
    render: function() {
        return (
            <Lesson2SubLesson
                activities={require("./activities")}
                phonic="b"
                phonicFilename="bh"
                choices={[
                    {word: "tub"},
                    {word: "web"}
                ]}/>
        );
    }
});

module.exports = Lesson2b;