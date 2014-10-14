var gulp = require("gulp"),
	plumber = require("gulp-plumber"),
	sass = require("gulp-sass"),
	browserify = require("gulp-browserify"),
	concat = require("gulp-concat"),
	jshint = require("gulp-jshint"),
	react = require("gulp-react"),
	stylish = require("jshint-stylish"),
	port = 4200;

var globalFiles = [
	"bower_components/store.js/store+json2.min.js"
];

gulp.task("lint", function() {
	return gulp.src("app/javascript/**/*.js")
		.pipe(plumber())
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
});

gulp.task("javascript", ["lint"], function() {
	return gulp.src("app/javascript/app.js")
		.pipe(plumber())
		.pipe(react())
		.pipe(browserify({debug: true}))
		.pipe(gulp.dest("dist/assets"));
});

gulp.task("global-js", function() {
	return gulp.src(globalFiles)
		.pipe(plumber())
		.pipe(concat("globals.js"))
		.pipe(gulp.dest("dist/assets"));
});

gulp.task("styles", function() {
	return gulp.src("app/styles/app.scss")
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest("dist/assets"));
});

gulp.task("html", function() {
	return gulp.src("app/index.html")
		.pipe(gulp.dest("dist"));
});

gulp.task("serve", function() {
	var express = require("express"),
		app = express();

	app.use(express.static(__dirname + "/dist"));
	app.listen(port);
});

gulp.task("build", ["javascript", "global-js", "styles", "html"]);

gulp.task("watch", ["build"], function() {
	gulp.watch("app/javascript/**/*.js", ["javascript"]);
	gulp.watch("app/styles/**/*.scss", ["styles"]);
	gulp.watch("app/index.html", ["html"]);
});

gulp.task("default", ["watch", "serve"]);