"use strict";

var React       = require("react"),
	Link        = require("components/utility/link"),
	WebLink		= require("components/utility/web-link"),
	AdminButton = require("components/admin-button"),
	soundManger = require("sound/sound-manager");

var Splash = React.createClass({
	sound: soundManger.get("assets/audio/common/welcome"),
	nextScreen: function() {
		Link.to("lesson/1");
	},

	componentDidMount: function() {
		var sound = this.sound;
		sound.load().then(function() {
			sound.play();
		});
	},

	componentWillUnmount: function() {
		this.sound.stop();
	},

	render: function() {
		var user = this.props.user;
		return (
			<div className='splash'>
				<WebLink className='logo' href='http://criticalthinking.com/'>
					<img src='assets/images/tctc-logo.png' />
				</WebLink>
				<div className='grades'>PreK - 2</div>
				<img src='assets/images/splash.png'/>
				<button onClick={this.nextScreen}></button>
			</div>
		);
	}
});

module.exports = Splash;