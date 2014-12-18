"use strict";

var React   = require("react"),
	$ 	    = require("jquery"),
	_		= require("lodash"),
	WebLink = require("components/utility/web-link"),
	Link 	= require("components/utility/link");

var InfoScreen = React.createClass({
	getInitialState: function() {
		return {
			eventId: "resize." + _.uniqueId("info-screen-")
		};
	},

	resizeContent: function() {
		var $this = $("#outlet"),
			$content = $(".info-screen-content"),
			height = $this.height(),
			headerHeight = $(".info-screen-header").height(),
			footerHeight = $(".info-screen-footer").height();

		$content.height(height - headerHeight - footerHeight);
	},

	componentDidMount: function() {
		$(window).on(this.state.eventId, this.resizeContent.bind(this));
        this.resizeContent();
	},

	componentWillUnmount: function() {
		$(window).off(this.state.eventId);
	},

	goHome: function() {
		Link.to("menu");
	},

	render: function() {
		var classNames = [
			"info-screen",
			this.props.className || ""
		].join(" ");

		return (
			<div className={classNames}>
				<div className='info-screen-header'>
					{this.props.header}
				</div>
				<div className='info-screen-content'>
					{this.props.children}
				</div>
				<div className='info-screen-footer'>
					<div className='info-box'>
						&copy; 2014 The Critical Thinking Co.&trade; &#8226; <WebLink href='http://www.criticalthinking.com'>www.CriticalThinking.com</WebLink> &#8226; 800-458-4849
					</div>
					<button className='info-back-button' onClick={this.goHome}>Back</button>
				</div>
			</div>
		);
	}
});

module.exports = InfoScreen;