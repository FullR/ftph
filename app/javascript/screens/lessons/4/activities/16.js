var React    = require("react"),
    Activity = require("screens/lessons/4/activity");

var Lesson4Activity16 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="16"
                word="string"
                choices={[
                    {word: "stick"},
                    {word: "swing", correct: true},
                    {word: "sink"}
                ]}
                nextScreen={require("./17")}/>
        );
    }
});

module.exports = Lesson4Activity16;