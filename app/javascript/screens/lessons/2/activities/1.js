var React    = require("react"),
    Activity = require("screens/lessons/2/activities-1-3");

var Lesson2Activity1 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="1"
                choices={[
                    {word: "cat", correct: true},
                    {word: "fish"},
                    {word: "hop"}
                ]}
                nextScreen={require("./2")}/>
        );
    }
});

module.exports = Lesson2Activity1;