var React = require("react"),
    Lesson2SubLesson = require("screens/lessons/2/sublesson");

var Lesson2f = React.createClass({
    render: function() {
        return (
            <Lesson2SubLesson
                activities={require("./activities")}
                phonic="f"
                phonicFilename="fh"
                choices={[
                    {word: "off"},
                    {word: "roof"}
                ]}/>
        );
    }
});

module.exports = Lesson2f;