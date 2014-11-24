"use strict";

var React         = require("react"),
	attemptHelper = require("../../helpers/attempt"),
	Link 		  = require("../utility/link.jsx");

var AttemptComponents = {
	"1": require("./attempts/attempt-type-1.jsx"),
	"2": require("./attempts/attempt-type-2.jsx"),
	"3": require("./attempts/attempt-type-3.jsx"),
	"4": require("./attempts/attempt-type-3.jsx")
};

var Attempt = React.createClass({
	render: function() {
		var attempt = this.props.attempt,
			AttemptComponent = AttemptComponents[attempt.attemptType];
			
		return (
			<div className='attempt-container'>
				<p>{attempt.getIndexString()}</p>
				<p>{attempt.getScore()}</p>
				<AttemptComponent attempt={attempt} />
				<Link to=''><button>Home</button></Link>
			</div>
		);
	}
});

module.exports = Attempt;