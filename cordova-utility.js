"use strict";

var Q                     = require("q"),
    exec                  = require("child_process").exec,
    level                 = require("./app/project").level,
    filename              = "Word-Roots-l"+level+"-Flashcards",
    cordovaProjectDirName = "cordova",
    cordovaWorkingDir     = __dirname + "/" + cordovaProjectDirName;

// run a command (just child_process.exec wrapped in a promise)
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

// run multiple commands (not in parallel)
function runEach(commands, options) {
    return commands.reduce(function(promise, command) {
        return promise.then(function() {
            return run(command, options);
        });
    }, Q.resolve());
}

var api = {
    setup: function() {
        function clean() {
            return runEach([
                "rm -rf " + cordovaProjectDirName,
                "rm -f android-apks/" + level + ".apk"
            ]);
        }

        function createProject() {
            return runEach([
                "cordova create cordova com.criticalthinking.wrfc-l"+level+"-debug " + filename,
                "rm -rf cordova/www",
                "ln -s ../dist cordova/www", // Symbolic link between the cordova www directory and our build directory
                "cp -R cordova-merge/* cordova"
            ]);
        }

        function addPlatforms() {
            return run("cordova platform add android", {cwd: cordovaWorkingDir});
        }

        function installPlugins() {
            return run("cordova plugin add org.apache.cordova.media", {cwd: cordovaWorkingDir});
        }

        return clean()
            .then(createProject)
            .then(addPlatforms)
            .then(installPlugins);
    },

    build: function() {
        function buildCordovaProject() {
            return run("cordova build android", {cwd: cordovaWorkingDir});
        }

        function copyAPK() {
            return runEach([
                "mkdir -p builds/android",
                "cp cordova/platforms/android/ant-build/WordRootsl"+level+"Flashcards-debug.apk builds/android/"+level+".apk"
            ]);
        }

        return this.setup()
            .then(buildCordovaProject)
            .then(copyAPK);
    },

    run: function() {
        function runCordovaProject() {
            return runEach([
                'cordova run android',
                'clear', 
                'adb logcat -c',
                'adb logcat "Cordova:* DroidGap:* CordovaLog:* *:S" | sed "s|.* file:\/\/\/||"'
            ]);
        }

        return this.setup(level)
            .then(runCordovaProject);
    }
};

module.exports = api;