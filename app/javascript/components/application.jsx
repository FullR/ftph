"use strict";

var load = require("../utility/load"),
	Route    = require("./route.jsx"),
	Link     = require("./utility/link.jsx"),
	Q = require("q");

function wait(ms) {
	return Q.promise(function(resolve) {
		setTimeout(resolve, ms);
	});
}

var Time = React.createClass({
	getDefaultProps: function() {
		return {
			hours: 0,
			minutes: 0,
			seconds: 0,
			mode: "24h"
		};
	},

	pad: function(n) {
		return (n+"").length < 2 ? "0"+n : n;
	},

	render: function() {
		var mode = this.props.mode,
			pm,
			timeString;

		if(mode === "24h") {
			timeString = this.pad(this.props.hours) + ":" + this.pad(this.props.minutes) + ":" + this.pad(this.props.seconds);
		}
		else {
			pm = this.props.hours > 12;
			timeString = this.pad(this.props.hours%12) + ":" + this.pad(this.props.minutes) + ":" + this.pad(this.props.seconds) + " " + (pm ? "PM" : "AM");
		}
		return <span className='time'>{timeString}</span>
	}
});

var Clock = React.createClass({
	getInitialState: function() {
		return {date: new Date};
	},

	render: function() {
		var date = this.state.date;

		setTimeout(function() {
			this.setState({date: new Date});
		}.bind(this), 500);

		return (
			<div className='clock'>
				<Time hours={date.getHours()} minutes={date.getMinutes()} seconds={date.getSeconds()} mode={this.props.mode}/>
			</div>
		);
	}
});



var Application = React.createClass({
	render: function() {

		var barNumberHandler = function(num) {
			return wait(3000).then(function() {
				return <div>this is some async data {num*43}</div>
			});
		}.bind(this);

		return (
			<div className="app">
				<Route>Index route</Route>

				<Route path="time">
					<Clock />
				</Route>

				<Route path="bar(/*rest)">
					bar route
					<Route path="bar/:num" handler={barNumberHandler}>
						bar/:num route
					</Route>
				</Route>

				<Link to="time"><button>time</button></Link>
				<Link to="bar"><button>bar</button></Link>
				<Link to="bar/23"><button>bar/23</button></Link>
			</div>
		);
	}
});

module.exports = Application;