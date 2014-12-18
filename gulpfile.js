"use strict";

var gulp        = require("gulp"),					 // Task runner
	plumber     = require("gulp-plumber"),           // Handles gulp errors without stopping the watch task
	sass        = require("gulp-ruby-sass"), 	     // Compiles scss/sass files into css
	Browserify  = require("browserify"),	         // Allows `require` and `module.exports` to be used in browser javascript
	jshint      = require("gulp-jshint"),            // Checks javascript files for issues
	reactify    = require("reactify"),	             // Browserify plugin for compiling jsx files
	source      = require("vinyl-source-stream"),    // Allows the use of text streams with gulp (needed for browserify)
	stylish     = require("jshint-stylish"),         // Prints a pretty report from the output of jshint
	Builder     = require("node-webkit-builder"),    // Builds Windows/Mac executables
	cssMin		= require("gulp-minify-css"),	     // Minify CSS
	uglify		= require("gulp-uglify"),			 // Minify Javascript
	prefix		= require("gulp-autoprefixer"),		 // Autoprefix Vendor specific CSS properties
	Filter      = require("gulp-filter"),            // Used to filter streams using globs
	cordovaUtil = require("./cordova-utility"),      // Script for setting up cordova and building android apks
	port        = 4210;								 // For test server

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
		.transform(reactify)
		.add("./app/javascript/app.js")
		.bundle()
	    .pipe(source("app.js"))
	    .pipe(gulp.dest("./dist/assets"));
});

// Compile scss files
gulp.task("styles", function() {
	var cssFilter = Filter("*.css");
	return gulp.src("app/styles/app.scss")
		.pipe(plumber())
		.pipe(sass({style: "compressed", require: ["susy"]}))
		//.pipe(cssFilter)
		//.pipe(prefix("last 2 versions"))
		//.pipe(cssFilter.restore())
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