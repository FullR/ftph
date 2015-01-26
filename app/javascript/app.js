"use strict";

var React   = require("react"),
    ready   = require("polyfills/cordova/device-ready"),
    project = require("../project"),
    $       = require("jquery"),
    render  = require("render"),
    Splash  = require("screens/splash"),
    muted   = true;

// Preload commonly used images
function preload() {
    require("images").images.forEach((image) => {
        $("<img/>")[0].src = image;
    });
}

ready.then(function() {
    try {
        //Function.prototype.bind polyfill for cordova
        require("./polyfills/function-prototype-bind")();

        // Cordova media polyfill
        require("./polyfills/cordova/cordova-media-plugin")();

        if(window.__platform.name === "web") {
            /* 
                hover seems to be broken on android,
                so I'm using a sass mixin for hover
                effects that only applies hover styles
                when the hover-enabled class is present on
                a parent element
            */
            $("body").addClass("hover-enabled");
            // set title
            $("title").html(project.title);

            if(muted) {
                window.Media.mute();
            }
            // Toggle mute when 'm' key is pressed
            $(document).on("keydown", (e) => {
                if(e.which === 77) {
                    window.Media[muted ? "unmute" : "mute"]();
                    muted = !muted;
                }
            });
        }
        preload();
        render(<Splash/>);
        //require("router/router");
    } catch(e) {
        return require("q").reject(e); // Q keeps errors from being thrown within promise callbacks
    }
}).done();