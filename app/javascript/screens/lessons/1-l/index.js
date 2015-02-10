var React = require("react"),
    Lesson1SubLesson = require("screens/lessons/1/sublesson");

var Lesson1l = React.createClass({
    render: function() {
        return (
            <Lesson1SubLesson
                activities={{
                    "6": require("screens/lessons/1/activities/6"),
                    "7": require("screens/lessons/1/activities/7")
                }}
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