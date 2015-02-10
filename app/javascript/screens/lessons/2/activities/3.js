var React    = require("react"),
    Activity = require("screens/lessons/2/activities-1-3");

var Lesson2Activity3 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="3"
                autoplayAnimation="choices-only"
                choices={[
                    {word: "stick"},
                    {word: "blast", correct: true},
                    {word: "sister"}
                ]}
                nextScreen={require("screens/lessons/2-d")}/>
        );
    }
});

module.exports = Lesson2Activity3;