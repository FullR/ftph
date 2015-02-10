var React = require("react"),
    Lesson1SubLesson = require("screens/lessons/1/sublesson");

var Lesson1m = React.createClass({
    render: function() {
        return (
            <Lesson1SubLesson
                activities={{
                    "4": require("screens/lessons/1/activities/4"),
                    "5": require("screens/lessons/1/activities/5")
                }}
                phonic="m"
                phonicFilename="mmh"
                choices={[
                    {word: "mom"},
                    {word: "monkey"}
                ]}/>
        );
    }
});

module.exports = Lesson1m;