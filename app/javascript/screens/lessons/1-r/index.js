var React = require("react");
var Lesson1SubLesson = require("screens/lessons/1/sublesson");

var Lesson1r = React.createClass({
    render: function() {
        return (
            <Lesson1SubLesson
                activities={require("./activities")}
                phonic="r"
                phonicFilename="rrh"
                choices={[
                    {word: "rat"},
                    {word: "rain"}
                ]}/>
        );
    }
});

module.exports = Lesson1r;