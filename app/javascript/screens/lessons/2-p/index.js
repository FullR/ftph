var React = require("react"),
    Lesson2SubLesson = require("screens/lessons/2/sublesson");

var Lesson2p = React.createClass({
    render: function() {
        return (
            <Lesson2SubLesson
                activities={require("./activities")}
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