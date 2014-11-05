"use strict";

var routeMixin    = require("../../../route-mixin"),
	Link          = require("../../utility/link.jsx"),
	Activity1to3  = require("./1-3.jsx"),
	Activity4to6  = require("./4-6.jsx"),
	Activity7to8  = require("./7-8.jsx"),
	Activity9to10 = require("./9-10.jsx");

var Activity = React.createClass({
	mixins: [routeMixin],

	getDefaultProps: function() {
		return {path: "activity/:activity_id"};
	},

	render: function() {
		var activityNumber = +this.props.params[0],
			ActivityView;

		if(activityNumber <= 3) {
			ActivityView = Activity1to3;
		}
		else if(activityNumber <= 6) {
			ActivityView = Activity4to6;
		}
		else if(activityNumber <= 8) {
			ActivityView = Activity7to8;
		}
		else {
			ActivityView = Activity9to10;
		}

		return (
			<div className='activity'>
				<ActivityView />
			</div>
		);
	}
});

module.exports = Activity;