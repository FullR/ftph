"use strict";

var fs = require("fs"),
	mkdirp = require("mkdirp"),
	componentPath = process.argv[2],
	componentFullPath = __dirname + "/app/javascript/components/" + componentPath,
	pathParts = componentFullPath.split("/"),
	dashedName = pathParts[pathParts.length-1],
	camalCaseName = dashedName.split("-").map(function(part) {
		part = part.split("");
		part[0] = part[0].toUpperCase();
		return part.join("");
	}).join(""),
	path = pathParts.slice(0, pathParts.length-1).join("/"),
	mixins = process.argv.slice(3).map(function(mixinName) {
		return 'require("mixins/'+mixinName+'")';
	}),
	filename = componentFullPath + ".jsx",
	content = [
		'"use strict";',
		'',
		'var React = require("react");',
		'',
		'var '+camalCaseName+' = React.createClass({',
		mixins.length > 0 ? '	mixins: ['+mixins.join(", ")+'],' : '',
		'	render: function() {',
		'		return (',
		'			<div className=\''+dashedName+'\'></div>',
		'		);',
		'	}',
		'});',
		'',
		'module.exports = ' + camalCaseName + ';'
	].join("\n");


mkdirp(path, function(err) {
	if(err) {
		console.error("Failed to create path: " + err);
	}
	else {
		fs.writeFile(filename, content, function(err) {
			if(err) {
				console.error("Failed to create file: " + err);
			}
		});
	}
});