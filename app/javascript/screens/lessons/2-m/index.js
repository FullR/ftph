var React = require("react"),
    Lesson2SubLesson = require("screens/lessons/2/sublesson");

var Lesson2m = React.createClass({
    render: function() {
        return (
            <Lesson2SubLesson
                activities={{
                    "12": require("screens/lessons/2/activities/12"),
                    "13": require("screens/lessons/2/activities/13")
                }}
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