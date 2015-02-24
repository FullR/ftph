var React = require("react"),
    Lesson1SubLesson = require("screens/lessons/1/sublesson");

var Lesson1g = React.createClass({
    render: function() {
        return (
            <Lesson1SubLesson
                activities={require("./activities")}
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