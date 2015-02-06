"use strict";

var React       = require("react"),
    WebLink     = require("components/utility/web-link"),
    AdminButton = require("components/admin-button"),
    render      = require("render");

var Splash = React.createClass({
    mixins: [require("mixins/sound-container")],
    autoplaySound: "welcome",

    getSounds: function() {
        return {
            "welcome": "assets/audio/common/welcome"
        };
    },

    nextScreen: function() {
        var Lesson1 = require("screens/lessons/1");
        render(<Lesson1/>);
    },

    render: function() {
        var user = this.props.user;
        return (
            <div className='splash'>
                <WebLink className='logo' href='http://criticalthinking.com/'>
                    <img src='assets/images/tctc-logo.png' />
                </WebLink>
                <div className='grades'>PreK - 2</div>
                <AdminButton section="1"/>
                <img className='background' src='assets/images/splash.png'/>
                <button onClick={this.nextScreen}></button>
            </div>
        );
    }
});

module.exports = Splash;