"use strict";

var gulp    = require("gulp"),                // Task runner
    gutil   = require("gulp-util"),
    Q       = require("q"),
    _       = require("lodash"),
    plumber = require("gulp-plumber"),        // Handles gulp errors without stopping the watch task
    source  = require("vinyl-source-stream"), // Allows the use of text streams with gulp (needed for browserify)
    port    = 4210;                           // For test server

var colors = {
    time: gutil.colors.magenta,
    taskName: gutil.colors.cyan,
    errors: gutil.colors.red.underline
};

var bundler = _.once(function() {
    var Browserify = require("browserify"),
        watchify   = require("watchify");

    return watchify(Browserify(_.extend({
        paths: ["./node_modules", "./app/javascript", "./lib"],
        debug: true
    }, watchify.args)))
    .transform(require("babelify"))
    .transform("brfs")
    .add("./app/javascript/app.js")
    .on("update", bundle)
    .on("time", function(time) {
        gutil.log("Finished '"+colors.taskName("bundler")+"' after " + colors.time(time + " ms"));
    });
});

function bundle() {
    gutil.log("Starting '"+colors.taskName("bundler")+"'...");
    return bundler()
        .bundle()
        .on("error", function(error) {
            gutil.log(colors.errors("Bundler Error:\n") + error.toString());
        })
        .pipe(source("app.js"))
        .pipe(gulp.dest("./dist/assets"));
}

// Compile javascript and jsx files
gulp.task("javascript", ["index-lessons"], bundle);
gulp.task("javascript-no-watch", ["index-lessons"], function() {
    var Browserify = require("browserify"),
        watchify   = require("watchify");

    return Browserify({
        paths: ["./node_modules", "./app/javascript", "./lib"],
        debug: true
    })
    .transform(require("6to5ify"))
    .transform("brfs")
    .add("./app/javascript/app.js")
    .bundle()
    .on("error", function(error) {
        gutil.log(colors.errors("Bundler Error:\n") + error.toString());
    })
    .pipe(source("app.js"))
    .pipe(gulp.dest("./dist/assets"));
});

// create a json file listing all images except the 
// word images so the client can preload them
gulp.task("map-images", function(callback) {
    var fs = require("fs"),
        glob = require("glob");

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

// Create a javascript file that includes 
// all lessons in the app's lessons directory
gulp.task("index-lessons", function(callback) {
    return require("./scripts/index-lessons")();
});

// Compile scss files
gulp.task("styles", function() {
    var sass = require("gulp-ruby-sass");
    return gulp.src("app/styles/app.scss")
        .pipe(plumber())
        .pipe(sass({style: "compressed", require: ["susy"]}))
        .pipe(gulp.dest("dist/assets"))
        .on("log", function(data) {
            console.log("SASS LOG:",data);
        });
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
    gutil.log("Listening on port " + port);
});

// Copy static assets
gulp.task("statics", ["build-assets"], function() {
    return gulp.src("statics/**/*")
        .pipe(gulp.dest("dist"));
});


gulp.task("build-images", function() {
    var imageMin = require("gulp-imagemin");
    return gulp.src("../Fun-Time-Phonics-Assets/images/**/*")
        .pipe(imageMin({ progressive: true }))
        .pipe(gulp.dest("statics/assets/images"));
});

gulp.task("build-audio",                       require("./scripts/build-audio"));
gulp.task("backup",                            require("./scripts/backup"));
gulp.task("index-word-images",                 require("./scripts/build-word-index"));
gulp.task("build-desktop", ["build-no-watch"], require("./scripts/build-node-webkit"));
gulp.task("upload",        ["build-no-watch"], require("./scripts/upload"));

gulp.task("build-assets", ["build-audio", "build-images"]);
gulp.task("setup",        ["build-assets", "index-word-images"])
gulp.task("distribute",   ["build-desktop", "build-android"]);
gulp.task("build",        ["javascript", "styles", "html", "statics"]);
gulp.task("build-no-watch", ["javascript-no-watch", "styles", "html", "statics"])

// Watch source files for changes. Rebuild necessary files when changes are made
gulp.task("watch", ["build"], function() {
    gulp.watch("app/styles/**/*.scss", ["styles"]);
    gulp.watch("app/index.html", ["html"]);
});

gulp.task("default", ["watch", "serve"]);