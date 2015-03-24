var React    = require("react"),
    Activity = require("screens/lessons/7/activity");

module.exports = React.createClass({
    render: function() {
        return (
            <Activity {...this.props}
                id="10"
                phonics={["sh", "ih", "n"]}
                choices={[
                    {word: "shin", correct: true},
                    {word: "ship"},
                    {word: "chin"}
                ]}
                nextScreen={require("./11")}/>
        );
    }
});
