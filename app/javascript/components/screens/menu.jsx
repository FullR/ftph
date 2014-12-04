"use strict";

var _              = require("lodash"),
	React          = require("react"),
	Link           = require("components/utility/link.jsx"),
	WebLink        = require("components/utility/web-link.jsx"),
	project        = require("../../../project"),
	attemptHelpers = require("helpers/attempt"),
	UserModal      = require("components/change-user-modal.jsx"),
	ClearModal     = require("components/clear-data-modal.jsx"),
	dispatcher	   = require("dispatcher");

var Menu = React.createClass({
	getInitialState: function() {
		return {
			showingUserModal: false,
			showingClearModal: false
		};
	},

	getHighscore: function(activity) {
		if(activity.attempts.length === 1 && activity.attempts[0].unused.length > 0) {
			return null;
		}

		var bestAttempt = activity.attempts.reduce(function(best, current, index) {
			if(index === activity.attempts.length - 1) {
				return best;
			}

			return attemptHelpers.getScore(current) > attemptHelpers.getScore(best) ? current : best;
		});

		return attemptHelpers.getScorePercent(bestAttempt);
	},

	showUserModal: function() {
		this.setState({
			showingUserModal: true
		});
	},

	showClearModal: function() {
		this.setState({
			showingClearModal: true
		});
	},

	closeUserModal: function() {
		this.setState({
			showingUserModal: false
		});
	},

	closeClearModal: function() {
		this.setState({
			showingClearModal: false
		});
	},

	clearProgress: function() {
		var user = this.props.user;

		dispatcher.sendMultiple({
			"clearData": [],
			"setUser": [user]
		});
		this.setState({
			showingClearModal: false
		});
	},

	changeUser: function() {
		dispatcher.send("clearData");
		Link.to("login");
	},

	render: function() {
		var props = this.props,
			previousActivityIndex = props.previousActivityIndex,
			getHighscore = this.getHighscore;

		function showActivity(id) {
			return function() {
				Link.to("activity/"+id);
			};
		}

		function menuButton(index, type, title) {
			var classNames = [
				"menu-button",
				"menu-"+type+"-button",
				previousActivityIndex === index ? "previous-activity-button" : ""
			].join(" ");

			var activity = props.activities[index],
				highscore = getHighscore(activity),
				infoText;

			if(activity.started) {
				if(typeof highscore === "number") {
					infoText = highscore + "%";
				}
				else {
					infoText = "Incomplete";
				}
			}
			else {
				infoText = "";
			}

			return 	(
				<div className={classNames} onClick={showActivity(index+1)}>
					<div className='menu-button-title' dangerouslySetInnerHTML={{__html: title}} />
					<div className='menu-button-index'>{index+1}</div>
					<div className='menu-button-info'>{infoText}</div>
				</div>
			);
		}

		var user = this.props.user;

		return (
			<div className='menu'>
				<div className='menu-header'>
					<h1>{project.title}&trade;</h1>
					<h2>Touch a game to begin.</h2>
				</div>
				<WebLink className='tctc-logo' href='http://criticalthinking.com/'></WebLink>

				<div className='menu-username'>{user}</div>


				<div className='menu-button-box'>
					<div className='menu-button-row-header'>Study Games</div>
					<div className='menu-button-row'>
						{menuButton(0, "prefix", "Identify Prefix<br/>Definition")}
						{menuButton(1, "root",   "Identify Root<br/>Definition")}
						{menuButton(2, "suffix", "Identify Suffix<br/>Definition")}
					</div>

					<div className='menu-button-row'>
						{menuButton(3, "prefix", "Identify Prefix<br/>From Definition")}
						{menuButton(4, "root",   "Identify Root<br/>From Definition")}
						{menuButton(5, "suffix", "Identify Suffix<br/>From Definition")}
					</div>

					<div className='menu-button-row-header menu-second-header'>Practice Games</div>
					<div className='menu-button-row menu-button-row-3'>
						{menuButton(6, "word",   "Identify Two Word Parts From the Word&#39;s Definition")}
						{menuButton(7, "word",   "Identify Three Word Parts From the Word&#39;s Definition")}
					</div>

					<div className='menu-button-row menu-button-row-4'>
						{menuButton(8, "word",   "Identify Two Word Parts That Form a Word")}
						{menuButton(9, "word",   "Identify Three Word Parts That Form a Word")}
					</div>
				</div>


				<div className='menu-bottom-buttons'>
					<Link to="about">About</Link>
					<Link to="license">License Agreement</Link>
					<Link to="other-products">Other Products</Link>
					<Link to="credits">Credits</Link>
					<a onClick={this.showClearModal}>Clear User Data</a>
				</div>

				
				<div className='menu-user-button' onClick={this.showUserModal}>Change<br/>User</div>
				{this.state.showingUserModal ? <UserModal onOverlayClick={this.closeUserModal} onNoClick={this.closeUserModal} onYesClick={this.changeUser}/> : null}
				{this.state.showingClearModal ? <ClearModal onOverlayClick={this.closeClearModal} onNoClick={this.closeClearModal} onYesClick={this.clearProgress}/> : null}
			</div>
		);
	}
});

module.exports = Menu;