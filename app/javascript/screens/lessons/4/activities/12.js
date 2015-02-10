var React    = require("react"),
    Activity = require("screens/lessons/4/activity");

var Lesson4Activity12 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="12"
                word="ax"
                choices={[
                    {word: "bag"},
                    {word: "wax", correct: true},
                    {word: "black"}
                ]}
                nextScreen={require("./13")}/>
        );
    }
});

module.exports = Lesson4Activity12;