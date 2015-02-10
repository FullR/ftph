var React    = require("react"),
    Activity = require("screens/lessons/1/activities-1-3");

var Lesson1Activity2 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="2"
                autoplayAnimation="choices-only"
                choices={[
                    {word: "bug"},
                    {word: "ten", correct: true},
                    {word: "car"}
                ]}
                nextScreen={require("./3")}/>
        );
    }
});

module.exports = Lesson1Activity2;