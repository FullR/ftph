var Q = require("q");
var exec = Q.nfbind(require("child_process").exec);

function run(cmd, options) {
    var args = arguments;
    return function() {
        return exec.apply(null, args).catch(function(error) {
            console.log("Command failed:",cmd);
            return Q.reject(error);
        });
    };
}

function runEach() {
    return Array.prototype.slice.call(arguments).reduce(function(promise, command) {
        if(typeof command === "string") {
            return promise.then(run(command));
        }
        else {
            return promise.then(run.apply(null, command));
        }
    }, Q.resolve());
}

/*
    Options:
        dir
        name
        namespace
*/
function buildProject(options) {
    var cordovaOptions = {
        cwd: options.dir,
        stdio: "inherit"
    };

    var promise = runEach(
        "rm -rf " + options.dir,
        ["cordova create " + options.dir + " " + options.namespace + " " + options.name, {stdio: "inherit"}],
        ["cordova platform add android", cordovaOptions],
        ["rm -rf " + options.dir + "/www", cordovaOptions],
        ["ln -s " + options.src + " www", cordovaOptions]
    );

    if(options.plugins) {
        promise = options.plugins.reduce(function(promise, plugin) {
            return promise.then(run("cordova plugin add " + plugin, cordovaOptions));
        }, promise);
    }

    if(options.merges) {
        promise = promise.then(run("cp -R " + options.merges + "/* " + options.dir));
    }

    return promise;
}

function runProject(options) {
    return buildProject(options)
        .then(run("cordova run android", {cwd: options.dir, stdio: "inherit"}));
}

module.exports = {
    build: buildProject,
    run: runProject
};