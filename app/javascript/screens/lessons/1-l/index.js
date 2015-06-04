var React = require("react");
var Lesson1SubLesson = require("screens/lessons/1/sublesson");

var Lesson1l = React.createClass({
    render: function() {
        return (
            <Lesson1SubLesson
                activities={require("./activities")}
                phonic="l"
                phonicFilename="llh"
                choices={[
                    {word: "lock"},
                    {word: "lion"}
                ]}/>
        );
    }
});

module.exports = Lesson1l;