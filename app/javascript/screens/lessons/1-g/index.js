var React = require("react"),
    Lesson1SubLesson = require("screens/lessons/1/sublesson");

var Lesson1g = React.createClass({
    render: function() {
        return (
            <Lesson1SubLesson
                activities={{
                    "12": require("screens/lessons/1/activities/12"),
                    "13": require("screens/lessons/1/activities/13")
                }}
                phonic="g"
                phonicFilename="gh"
                choices={[
                    {word: "gate"},
                    {word: "giggle"}
                ]}/>
        );
    }
});

module.exports = Lesson1g;