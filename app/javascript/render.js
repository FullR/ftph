var React = require("react");
var outlet = document.getElementById("outlet");
var renderHistory = [];
var current;

function render(component) {
    if(current) {
        renderHistory.push(current);
    }
    current = component;
    React.render(component, outlet);
}

render.previous = function() {
    if(renderHistory.length) {
        render(renderHistory[renderHistory.length-1]);
    }
};

module.exports = render;