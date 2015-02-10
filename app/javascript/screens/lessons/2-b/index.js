var React = require("react"),
    Lesson2SubLesson = require("screens/lessons/2/sublesson");

var Lesson2b = React.createClass({
    render: function() {
        return (
            <Lesson2SubLesson
                activities={{
                    "14": require("screens/lessons/2/activities/14"),
                    "15": require("screens/lessons/2/activities/15")
                }}
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