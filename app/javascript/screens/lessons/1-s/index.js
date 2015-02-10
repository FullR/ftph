var React = require("react"),
    Lesson1SubLesson = require("screens/lessons/1/sublesson");

var Lesson1s = React.createClass({
    render: function() {
        return (
            <Lesson1SubLesson
                activities={{
                    "14": require("screens/lessons/1/activities/14"),
                    "15": require("screens/lessons/1/activities/15")
                }}
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