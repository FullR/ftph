var React = require("react");
var ready = require("polyfills/cordova/device-ready");
var project = require("../project");
var render = require("render");
var Splash = require("screens/splash");
var muted = false;

// Preload commonly used images
function preloadImages() {
    require("images").images.forEach(function(image) {
        document.createElement("img").src = image;
    });
}

ready.then(function() {
    try {
        // Function.prototype.bind polyfill for cordova
        require("polyfills/function-prototype-bind")();

        // Cordova media polyfill
        require("polyfills/cordova/cordova-media-plugin")();

        if(window.__platform.name === "web") {
            /*  hover seems to be broken on android,
                so I'm using a sass mixin for hover
                effects that only applies hover styles
                when the hover-enabled class is present on
                a parent element

                The exact issue is that hover effects seem
                to be applied on the active state and are
                not removed when the user finishes the
                action
            */
            if(document.body.classList) {
                document.body.classList.add("hover-enabled");
            }
            else {
                document.body.className += " hover-enabled";
            }

            // Set title
            document.getElementsByTagName("title")[0].innerHTML = project.title;

            if(muted) {
                window.Media.mute();
            }
            // Toggle mute when "m" key is pressed
            document.addEventListener("keydown", (event) => {
                if(event.which === 77) {
                    window.Media[muted ? "unmute" : "mute"]();
                    muted = !muted;
                    console.log(muted ? "muted" : "unmuted");
                }
            });
        }
        preloadImages();
        render(<Splash/>);
    } catch(e) {
        return require("q").reject(e); // Q keeps errors from being thrown within promise callbacks
    }
}).done();
