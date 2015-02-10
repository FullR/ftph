var React    = require("react"),
    Activity = require("screens/lessons/2/activities-1-3");

var Lesson2Activity2 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="2"
                autoplayAnimation="choices-only"
                choices={[
                    {word: "butter"},
                    {word: "two"},
                    {word: "pot", correct: true}
                ]}
                nextScreen={require("./3")}/>
        );
    }
});

module.exports = Lesson2Activity2;