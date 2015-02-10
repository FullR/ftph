var React    = require("react"),
    Activity = require("screens/lessons/3/activity");

var Lesson3Activity13 = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="13"
                instroduceEnding={true}
                ending={true}
                choices={[
                    {word: "map", correct: true},
                    {word: "mad"},
                    {word: "lip", correct: true}
                ]}
                nextScreen={require("./14")}/>
        );
    }
});

module.exports = Lesson3Activity13;