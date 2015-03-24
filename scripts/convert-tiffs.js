// converts a bunch of .tifs into .pngs
var glob = require("glob"),
    exec = require("child_process").exec;

glob("*.tif", {cwd: "./raw-assets/new-images"}, function(err, files) {
    files.forEach(function(file) {
        var command = [
            "convert",
            ["'", __dirname, "/raw-assets/new-images/", file, "'"].join(""),
            ["'", __dirname, "/raw-assets/new-images/", file.split(".")[0], ".png'"].join("")
        ].join(" ");
        exec(command, function(err) {
            if(err) {
                console.error(err);
            }
        });
    }); 
});
