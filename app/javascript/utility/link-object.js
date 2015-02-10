

var _ = require("lodash"),
    link = require("utility/link");

function linkObject(obj) {
    link(_.values(obj));
    return obj;
}