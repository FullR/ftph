"use strict";

var Q = require("q"),
	exec = require("child_process").exec;

var level = process.argv[2],
	cordovaProjectDirName = "cordova",
	cordovaWorkingDir = __dirname + "/" + cordovaProjectDir;

// run a command
function run(command, options) {
	var deferred = Q.defer();
	exec(command, options || {}, function(err, stdout, stderr) {
		if(err) {
			deferred.reject(err);
		}
		else {
			deferred.resolve({
				stdout: stdout,
				stderr: stderr
			});
		}
	});
	return deferred.promise;
}

// returns a function that runs a command when invoked
function thenRun(command, options) {
	return function() {
		return run(command, options);
	};
}

function clean() {
	return run("rm -rf " + cordovaProjectDir);
}

function createProject() {
	return run("cordova create cordova com.criticalthinking.wrfc-"+level+" Word-Roots-"+level+"-Flashcards")
		.then(thenRun("rm -rf cordova/www"))
		.then(thenRun("ln -s ../dist cordova/www"))
		.then(thenRun("cp -R cordova-merge/* cordova"));
}

function addPlatforms() {
	return run("cordova platform add android", {cwd: cordovaWorkingDir});
}

function installPlugins() {
	return run("cordova plugin add org.apache.cordova.media", {cwd: cordovaWorkingDir});
}

clean()
	.then(createProject)
	.then(addPlatforms)
	.then(installPlugins);