var React    = require("react"),
    Activity = require("screens/lessons/6/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="9"
                phonics={["m", "ah", "d"]}
                choices={[
                    {word: "mad", correct: true},
                    {word: "mask"},
                    {word: "dad"}
                ]}
                nextScreen={require("./10")}/>
        );
    }
});