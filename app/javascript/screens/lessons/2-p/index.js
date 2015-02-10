var React = require("react"),
    Lesson2SubLesson = require("screens/lessons/2/sublesson");

var Lesson2p = React.createClass({
    render: function() {
        return (
            <Lesson2SubLesson
                activities={{
                    "6": require("screens/lessons/2/activities/6"),
                    "7": require("screens/lessons/2/activities/7")
                }}
                phonic="p"
                phonicFilename="ph"
                choices={[
                    {word: "hop"},
                    {word: "cap"}
                ]}/>
        );
    }
});

module.exports = Lesson2p;