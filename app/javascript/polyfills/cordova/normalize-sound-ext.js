"use strict";

function path(filepath) {
	if(window.__platform.name === "Android") {
		return "/android_asset/www/"+filepath;
	}

	return filepath;
}

var audioExtention,
	normalize;

switch(window.__platform.name) {
	case "web": audioExtention = "ogg"; break;
	case "Android": audioExtention = "ogg"; break;
	case "iOS": audioExtention = "mp3"; break;
}

module.exports = {
	path: path,
	audioExtention: audioExtention
};