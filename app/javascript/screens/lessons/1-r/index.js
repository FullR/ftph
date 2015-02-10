var React = require("react"),
    Lesson1SubLesson = require("screens/lessons/1/sublesson");

var Lesson1r = React.createClass({
    render: function() {
        return (
            <Lesson1SubLesson
                activities={{
                    "10": require("screens/lessons/1/activities/10"),
                    "11": require("screens/lessons/1/activities/11")
                }}
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