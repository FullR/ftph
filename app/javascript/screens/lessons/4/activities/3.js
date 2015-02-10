var React    = require("react"),
    Activity = require("screens/lessons/4/activity");

var Lesson4Activity3 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="3"
                word="up"
                choices={[
                    {word: "bug"},
                    {word: "under"},
                    {word: "cup", correct: true}
                ]}
                nextScreen={require("./4")}/>
        );
    }
});

module.exports = Lesson4Activity3;