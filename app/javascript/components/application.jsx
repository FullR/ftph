'use strict';

var _ = require("lodash"),
	React 	 = require('react'),
	Route    = require('./route.jsx'),
	Link     = require('./utility/link.jsx'),
	Q 		 = require('q');

var Splash = require('./screens/splash.jsx'),
	Login  = require('./screens/login.jsx'),
	Menu   = require("./screens/menu.jsx");

var Activity1to3  = require("./screens/activities/activity-1-3.jsx"),
	Activity4to6  = require("./screens/activities/activity-4-6.jsx"),
	Activity7to8  = require("./screens/activities/activity-7-8.jsx"),
	Activity9to10 = require("./screens/activities/activity-9-10.jsx");

var Application = React.createClass({
	render: function() {
		var model = this.props.model,
			activities = model.activities;

		return (
			<div className='app'>
				<Route>
					<Menu />
				</Route>

				<Route path='activity/1'>
					<Activity1to3 id={0} type='prefix' activity={activities[0]} />
				</Route>
				<Route path='activity/2'>
					<Activity1to3 id={1} type='root' activity={activities[1]} />
				</Route>
				<Route path='activity/3'>
					<Activity1to3 id={2} type='suffix' activity={activities[2]} />
				</Route>



				<Route path='activity/4'>
					<Activity4to6 id={3} type='prefix' activity={activities[3]} />
				</Route>
				<Route path='activity/5'>
					<Activity4to6 id={4} type='root' activity={activities[4]} />
				</Route>
				<Route path='activity/6'>
					<Activity4to6 id={5} type='suffix' activity={activities[5]} />
				</Route>



				<Route path='activity/7'>
					<Activity7to8 id={6} type='word' count={3} activity={activities[6]} />
				</Route>
				<Route path='activity/8'>
					<Activity7to8 id={7} type='word' count={4} activity={activities[7]} />
				</Route>



				<Route path='activity/9'>
					<Activity9to10 id={8} type='word' count={3} activity={activities[8]} />
				</Route>
				<Route path='activity/10'>
					<Activity9to10 id={9} type='word' count={4} activity={activities[9]} />
				</Route>
			</div>
		);
	}
});

module.exports = Application;