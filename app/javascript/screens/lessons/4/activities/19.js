var React    = require("react"),
    Activity = require("screens/lessons/4/activity");

var Lesson4Activity19 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="19"
                word="truck"
                choices={[
                    {word: "bucket"},
                    {word: "duck", correct: true},
                    {word: "trunk"}
                ]}
                nextScreen={require("./20")}/>
        );
    }
});

module.exports = Lesson4Activity19;