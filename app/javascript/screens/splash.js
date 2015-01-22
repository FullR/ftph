"use strict";

var React       = require("react"),
    Link        = require("components/utility/link"),
    WebLink     = require("components/utility/web-link"),
    AdminButton = require("components/admin-button");

var Splash = React.createClass({
    mixins: [require("mixins/sound-container")],
    autoplaySound: "welcome",
    getSounds: function() {
        return {
            "welcome": "assets/audio/common/welcome"
        };
    },

    nextScreen: function() {
        Link.to("lesson/1");
    },

    render: function() {
        var user = this.props.user;
        return (
            <div className='splash'>
                <WebLink className='logo' href='http://criticalthinking.com/'>
                    <img src='assets/images/tctc-logo.png' />
                </WebLink>
                <div className='grades'>PreK - 2</div>
                <AdminButton />
                <img className='background' src='assets/images/splash.png'/>
                <button onClick={this.nextScreen}></button>
            </div>
        );
    }
});

module.exports = Splash;