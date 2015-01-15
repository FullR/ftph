"use strict";

var gulp        = require("gulp"),                   // Task runner
    _           = require("lodash"),
    fs          = require("fs"),
    plumber     = require("gulp-plumber"),           // Handles gulp errors without stopping the watch task
    sass        = require("gulp-ruby-sass"),         // Compiles scss/sass files into css
    Browserify  = require("browserify"),             // Allows `require` and `module.exports` to be used in browser javascript
    jshint      = require("gulp-jshint"),            // Checks javascript files for issues
    scsslint    = require("gulp-scss-lint"),         // Check scss files for issues
    reactify    = require("reactify"),               // Browserify plugin for compiling jsx files
    source      = require("vinyl-source-stream"),    // Allows the use of text streams with gulp (needed for browserify)
    stylish     = require("jshint-stylish"),         // Prints a pretty report from the output of jshint
    Builder     = require("node-webkit-builder"),    // Builds Windows/Mac executables
    cssMin      = require("gulp-minify-css"),        // Minify CSS
    uglify      = require("gulp-uglify"),            // Minify Javascript
    prefix      = require("gulp-autoprefixer"),      // Autoprefix Vendor specific CSS properties
    Filter      = require("gulp-filter"),            // Used to filter streams using globs
    imageMin    = require("gulp-imagemin"),          // Optimizes images
    glob        = require("glob"),                   // For quering the filesystem for filenames
    cordovaUtil = require("./cordova-utility"),      // Script for setting up cordova and building android apks
    buildAudio  = require("./build-audio"),          // Converts .wav files to .ogg and .mp3
    port        = 4210;                              // For test server

// Custom react transform forces es6 option
var reactTransform = function(file) {
    return reactify(file, {es6: true});
};
reactTransform.process = reactify.process;
reactTransform.isJSXExtensionRe = reactify.isJSXExtensionRe;


// create a json file listing all images except the word images so the client can preload them
gulp.task("map-images", function(callback) {
    glob("assets/images/!(words)/*", {cwd: "statics"}, function(err, files) {
        if(err) {
            callback(err);
        }
        else {
            fs.writeFile("app/javascript/images.json", JSON.stringify({images: files}, null, 4), function() {
                callback();
            });
        }
    });
});

// Check javascript files for issues
gulp.task("lint", function() {
    return gulp.src("app/javascript/**/*.js")
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

// Compile javascript and jsx files
gulp.task("javascript", function() {
    return new Browserify({
            paths: ["./node_modules", "./app/javascript"],
            debug: true
        })
        .transform(reactTransform)
        .add("./app/javascript/app.js")
        .bundle()
        .pipe(source("app.js"))
        .pipe(gulp.dest("./dist/assets"));
});

gulp.task("lint-scss", function() {
    return gulp.src("app/styles/**/*.scss")
        .pipe(scsslint());
});

// Compile scss files
gulp.task("styles", function() {
    var cssFilter = Filter("*.css");
    return gulp.src("app/styles/app.scss")
        .pipe(plumber())
        .pipe(sass({style: "compressed", require: ["susy"]}))
        .pipe(gulp.dest("dist/assets"));
});

// Copy source html file
gulp.task("html", function() {
    return gulp.src("app/index.html")
        .pipe(gulp.dest("dist"));
});

// Host compiled web app for testing
gulp.task("serve", function() {
    var express = require("express"),
        app = express();

    app.use(express.static(__dirname + "/dist"));
    app.listen(port);
    console.log("Listening on port " + port);
});

// Copy static assets
gulp.task("statics", function() {
    return gulp.src("statics/**/*")
        .pipe(gulp.dest("dist"));
});

// Build Windows/Mac distributions
gulp.task("build-desktop", ["build"], function(callback) {
    var builder = new Builder({
        files: ["./dist/**/!(*.mp3)"],
        cacheDir: "./.node-webkit-cache",
        buildDir: "./builds/desktop",
        platforms: ["win"]
    });

    builder.on("log", console.log);
    builder.build().then(
        function() {
            callback();
        },
        function(err) {
            callback(err);
        }
    );
});

gulp.task("build-android", ["build"], function(callback) {
    cordovaUtil.build()
        .then(function() {
            callback();
        }, function(err) {
            callback(err);
        })
});

gulp.task("build-audio", function() {
    return buildAudio();
});

gulp.task("build-images", function() {
    return gulp.src("raw-assets/images/**/*")
        .pipe(imageMin({ progressive: true }))
        .pipe(gulp.dest("statics/assets/images"));
});

gulp.task("upload", ["build"], function() {
    var exec = require("child_process").exec,
        Q = require("q"),
        deferred = Q.defer();

    exec('sshpass -p "ctADl0g1n" scp -r dist/* james@12.0.0.70:/home/james/server/apps/fun-time-phonics', function(err) {
        if(err) {
            deferred.reject(err);
        }
        else {
            deferred.resolve();
        }
    });

    return deferred.promise;
});

gulp.task("build-assets", ["build-audio", "build-images"]);

// Build web version
gulp.task("build", ["javascript", "styles", "html", "statics"]);

gulp.task("distribute", ["build-desktop", "build-android"]);

// Watch source files for changes. Rebuild necessary files when changes are made
gulp.task("watch", ["build"], function() {
    gulp.watch(["app/javascript/**/*.js", "app/javascript/**/*.jsx"], ["javascript"]);
    gulp.watch("app/styles/**/*.scss", ["styles"]);
    gulp.watch("app/index.html", ["html"]);
    //gulp.watch("statics/**/*", ["statics"]);
});

gulp.task("default", ["watch", "serve"]);