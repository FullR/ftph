var gulp = require("gulp"),
	plumber = require("gulp-plumber"),
	sass = require("gulp-sass"),
	browserify = require("browserify"),
	concat = require("gulp-concat"),
	jshint = require("gulp-jshint"),
	reactify = require("reactify"),
	source = require("vinyl-source-stream"),
	stylish = require("jshint-stylish"),
	port = 4210;

var globalFiles = [
	"bower_components/store.js/store+json2.min.js"
];

gulp.task("lint", function() {
	return gulp.src("app/javascript/**/*.js")
		.pipe(plumber())
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
});

gulp.task("javascript", function() {
	var b = browserify();
	b.transform(reactify);
	b.add("./app/javascript/app.js");
	return b.bundle()
	    .pipe(source("app.js"))
	    .pipe(gulp.dest("./dist/assets"));
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

gulp.task("statics", function() {
	return gulp.src("statics/**/*")
		.pipe(gulp.dest("dist"));
});

gulp.task("build", ["javascript", "global-js", "styles", "html", "statics"]);

gulp.task("watch", ["build"], function() {
	gulp.watch(["app/javascript/**/*.js", "app/javascript/**/*.jsx"], ["javascript"]);
	gulp.watch("app/styles/**/*.scss", ["styles"]);
	gulp.watch("app/index.html", ["html"]);
	gulp.watch("statics/**/*", ["statics"]);
});

gulp.task("default", ["watch", "serve"]);